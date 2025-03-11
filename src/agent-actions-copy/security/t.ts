import axios from "axios";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import winston from "winston";
import {
    ContractAssessment,
  ContractData,
  DetailedData,
  GoPlusApiResponse,
  RiskFactor,
  RiskLevel,
} from "./type";

// Load environment variables
dotenv.config();

// Configure logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} - ${level.toUpperCase()}: ${message}`;
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "contract_detector.log" }),
  ],
});

/**
 * Smart Contract Red Flag Detector using GoPlus API
 */
class SmartContractDetector {
  private apiKey: string | undefined;
  private chainId: number;
  private apiUrl: string;

  // Risk classification constants
  private readonly HIGH_RISK: RiskLevel = "HIGH";
  private readonly MEDIUM_RISK: RiskLevel = "MEDIUM";
  private readonly LOW_RISK: RiskLevel = "LOW";
  private readonly SAFE: RiskLevel = "SAFE";

  /**
   * Initialize the detector with API credentials
   *
   * @param apiKey - GoPlus API key (optional, can be set via env var GOPLUS_API_KEY)
   * @param chainId - Blockchain ID (1 for Ethereum, 56 for BSC, etc.)
   */
  constructor(apiKey?: string, chainId: number = 1) {
    this.apiKey = apiKey || process.env.GOPLUS_API_KEY;
    this.chainId = chainId;
    this.apiUrl = "https://api.gopluslabs.io/api/v1/token_security";

    if (!this.apiKey) {
      logger.warn("No API key provided. Some API features may be limited.");
    }
  }

  /**
   * Analyze a smart contract for potential red flags
   *
   * @param contractAddress - The contract address to analyze
   * @returns A detailed risk assessment
   */
  public async analyzeContract(
    contractAddress: string,
  ): Promise<ContractAssessment> {
    try {
      // Get contract data from GoPlus API
      const contractData = await this._fetchContractData(contractAddress);

      if (!contractData) {
        return {
          error: "Failed to fetch contract data",
          address: contractAddress,
          token_name: "Unknown",
          token_symbol: "Unknown",
          risk_level: this.HIGH_RISK,
          risk_score: 100,
          risk_factors: [],
          summary: "Unable to analyze contract.",
          detailed_data: this._getEmptyDetailedData(),
        };
      }

      // Extract the result for the specific contract
      const result = contractData.result?.[contractAddress.toLowerCase()];

      if (!result) {
        return {
          error: "No data available for this contract",
          address: contractAddress,
          token_name: "Unknown",
          token_symbol: "Unknown",
          risk_level: this.HIGH_RISK,
          risk_score: 100,
          risk_factors: [],
          summary: "No data available for analysis.",
          detailed_data: this._getEmptyDetailedData(),
        };
      }

      // Analyze the contract data
      const riskFactors = this._identifyRiskFactors(result);
      const [riskLevel, riskScore] = this._calculateRiskLevel(riskFactors);

      // Compile the detailed assessment
      const assessment: ContractAssessment = {
        address: contractAddress,
        token_name: result.token_name || "Unknown",
        token_symbol: result.token_symbol || "Unknown",
        risk_level: riskLevel,
        risk_score: riskScore,
        risk_factors: riskFactors,
        summary: this._generateSummary(result, riskLevel, riskFactors),
        detailed_data: this._extractImportantDetails(result),
      };

      return assessment;
    } catch (error) {
      logger.error(`Error analyzing contract ${contractAddress}: ${error}`);

      return {
        error: `Analysis failed: ${error}`,
        address: contractAddress,
        token_name: "Unknown",
        token_symbol: "Unknown",
        risk_level: this.HIGH_RISK,
        risk_score: 100,
        risk_factors: [],
        summary: "Error occurred during analysis.",
        detailed_data: this._getEmptyDetailedData(),
      };
    }
  }

  /**
   * Fetch contract data from the GoPlus API
   *
   * @param contractAddress - The contract address to analyze
   * @returns The raw API response data
   */
  private async _fetchContractData(
    contractAddress: string,
  ): Promise<GoPlusApiResponse | null> {
    const params = {
      contract_addresses: contractAddress,
      chain_id: this.chainId.toString(),
    };

    const headers: Record<string, string> = {};
    if (this.apiKey) {
      headers["X-API-KEY"] = this.apiKey;
    }

    try {
      logger.info(`Fetching data for contract: ${contractAddress}`);
      const response = await axios.get(this.apiUrl, { params, headers });
      return response.data as GoPlusApiResponse;
    } catch (error) {
      logger.error(`Error fetching contract data: ${error}`);
      return null;
    }
  }

  /**
   * Identify risk factors from contract data
   *
   * @param contractData - The contract data from GoPlus API
   * @returns A list of risk factors with severity levels
   */
  private _identifyRiskFactors(contractData: ContractData): RiskFactor[] {
    const riskFactors: RiskFactor[] = [];

    // Check for honeypot indicators
    if (contractData?.is_honeypot === "1") {
      riskFactors.push({
        factor: "Honeypot Contract",
        severity: this.HIGH_RISK,
        description:
          "Contract is identified as a honeypot, preventing users from selling tokens.",
      });
    }

    if (contractData.honeypot_with_same_creator === "1") {
      riskFactors.push({
        factor: "Creator History",
        severity: this.HIGH_RISK,
        description: "Creator has previously deployed honeypot contracts.",
      });
    }

    // Check for tax-related issues
    const buyTax = parseFloat(contractData.buy_tax || "0");
    const sellTax = parseFloat(contractData.sell_tax || "0");

    if (buyTax > 0 || sellTax > 0) {
      let severity: RiskLevel = this.LOW_RISK;
      if (buyTax > 10 || sellTax > 10) {
        severity = this.HIGH_RISK;
      } else if (buyTax > 5 || sellTax > 5) {
        severity = this.MEDIUM_RISK;
      }

      riskFactors.push({
        factor: "Transaction Taxes",
        severity: severity,
        description: `Contract imposes taxes: ${buyTax}% on buys, ${sellTax}% on sells.`,
        details: { buy_tax: buyTax, sell_tax: sellTax },
      });
    }

    // Check for ownership/control issues
    if (
      contractData.owner_address !==
      "0x0000000000000000000000000000000000000000"
    ) {
      riskFactors.push({
        factor: "Centralized Ownership",
        severity: this.MEDIUM_RISK,
        description: "Contract has an active owner with privileged access.",
        details: { owner_address: contractData.owner_address },
      });

      const ownerPercent = parseFloat(contractData.owner_percent || "0");
      if (ownerPercent > 5) {
        const severity: RiskLevel =
          ownerPercent < 20 ? this.MEDIUM_RISK : this.HIGH_RISK;
        riskFactors.push({
          factor: "Owner Token Holdings",
          severity: severity,
          description: `Owner holds ${ownerPercent}% of token supply.`,
          details: { owner_percent: ownerPercent },
        });
      }
    }

    if (contractData.can_take_back_ownership === "1") {
      riskFactors.push({
        factor: "Ownership Reclaim",
        severity: this.HIGH_RISK,
        description: "Contract allows taking back ownership after renouncing.",
      });
    }

    if (contractData.hidden_owner === "1") {
      riskFactors.push({
        factor: "Hidden Owner",
        severity: this.HIGH_RISK,
        description: "Contract has a hidden owner mechanism.",
      });
    }

    // Check for trading limitations
    if (contractData.cannot_buy === "1") {
      riskFactors.push({
        factor: "Buy Restriction",
        severity: this.HIGH_RISK,
        description: "Contract prevents users from buying tokens.",
      });
    }

    if (contractData.cannot_sell_all === "1") {
      riskFactors.push({
        factor: "Sell Restriction",
        severity: this.HIGH_RISK,
        description: "Contract prevents users from selling all their tokens.",
      });
    }

    if (contractData.trading_cooldown === "1") {
      riskFactors.push({
        factor: "Trading Cooldown",
        severity: this.MEDIUM_RISK,
        description: "Contract implements trading cooldown periods.",
      });
    }

    if (contractData.is_anti_whale === "1") {
      let severity: RiskLevel = this.LOW_RISK;
      let description = "Contract limits transaction sizes.";

      if (contractData.anti_whale_modifiable === "1") {
        severity = this.MEDIUM_RISK;
        description =
          "Contract limits transaction sizes and limits can be modified by owner.";
      }

      riskFactors.push({
        factor: "Anti-Whale Measures",
        severity: severity,
        description: description,
      });
    }

    // Check for contract modification capabilities
    if (contractData.is_mintable === "1") {
      riskFactors.push({
        factor: "Mintable",
        severity: this.MEDIUM_RISK,
        description:
          "Contract allows minting additional tokens, potentially diluting value.",
      });
    }

    if (contractData.transfer_pausable === "1") {
      riskFactors.push({
        factor: "Pausable Transfers",
        severity: this.HIGH_RISK,
        description: "Contract allows pausing all transfers.",
      });
    }

    if (contractData.is_proxy === "1") {
      riskFactors.push({
        factor: "Proxy Contract",
        severity: this.MEDIUM_RISK,
        description:
          "Contract uses proxy pattern, allowing logic to be changed.",
      });
    }

    if (contractData.selfdestruct === "1") {
      riskFactors.push({
        factor: "Self-Destruct",
        severity: this.HIGH_RISK,
        description: "Contract includes self-destruct functionality.",
      });
    }

    if (contractData.external_call === "1") {
      riskFactors.push({
        factor: "External Calls",
        severity: this.MEDIUM_RISK,
        description:
          "Contract makes external calls that could be vulnerable to reentrancy.",
      });
    }

    // Check for slippage modification
    if (contractData.slippage_modifiable === "1") {
      let severity: RiskLevel = this.MEDIUM_RISK;
      let description = "Contract can modify global slippage settings.";

      if (contractData.personal_slippage_modifiable === "1") {
        severity = this.HIGH_RISK;
        description = "Contract can modify slippage settings per user.";
      }

      riskFactors.push({
        factor: "Slippage Modification",
        severity: severity,
        description: description,
      });
    }

    // Check liquidity issues
    if (contractData.is_in_dex === "0") {
      riskFactors.push({
        factor: "No Liquidity",
        severity: this.HIGH_RISK,
        description: "Contract has no liquidity in DEXes.",
      });
    } else {
      // Check liquidity locking
      const lpHolders = contractData.lp_holders || [];
      let lockedLpPercent = 0;

      for (const holder of lpHolders) {
        if (holder.is_locked === 1) {
          lockedLpPercent += parseFloat(holder.percent || "0");
        }
      }

      if (lockedLpPercent < 50) {
        const severity: RiskLevel =
          lockedLpPercent < 20 ? this.HIGH_RISK : this.MEDIUM_RISK;
        riskFactors.push({
          factor: "Low Liquidity Locking",
          severity: severity,
          description: `Only ${lockedLpPercent.toFixed(2)}% of liquidity is locked.`,
        });
      }
    }

    // Check code verification
    if (contractData.is_open_source === "0") {
      riskFactors.push({
        factor: "Closed Source",
        severity: this.HIGH_RISK,
        description: "Contract source code is not verified.",
      });
    }

    // Check token concentration
    const holders = contractData.holders || [];
    const topHoldersPercent = holders.slice(0, 5).reduce((sum, holder) => {
      return sum + parseFloat(holder.percent || "0");
    }, 0);

    if (topHoldersPercent > 50) {
      const severity: RiskLevel =
        topHoldersPercent > 80 ? this.HIGH_RISK : this.MEDIUM_RISK;
      riskFactors.push({
        factor: "Concentrated Holdings",
        severity: severity,
        description: `Top 5 holders control ${topHoldersPercent.toFixed(2)}% of supply.`,
      });
    }

    return riskFactors;
  }

  /**
   * Calculate the overall risk level based on individual risk factors
   *
   * @param riskFactors - List of identified risk factors
   * @returns Tuple of [risk_level, risk_score]
   */
  private _calculateRiskLevel(riskFactors: RiskFactor[]): [RiskLevel, number] {
    if (riskFactors.length === 0) {
      return [this.SAFE, 0.0];
    }

    // Count risk factors by severity
    const highRiskCount = riskFactors.filter(
      (factor) => factor.severity === this.HIGH_RISK,
    ).length;
    const mediumRiskCount = riskFactors.filter(
      (factor) => factor.severity === this.MEDIUM_RISK,
    ).length;
    const lowRiskCount = riskFactors.filter(
      (factor) => factor.severity === this.LOW_RISK,
    ).length;

    // Calculate weighted risk score (0-100)
    const riskScore = Math.min(
      100,
      highRiskCount * 25 + mediumRiskCount * 10 + lowRiskCount * 3,
    );

    // Determine risk level
    if (highRiskCount > 0) {
      return [this.HIGH_RISK, riskScore];
    } else if (mediumRiskCount > 1) {
      return [this.MEDIUM_RISK, riskScore];
    } else if (mediumRiskCount === 1 || lowRiskCount > 2) {
      return [this.LOW_RISK, riskScore];
    } else {
      return [this.SAFE, riskScore];
    }
  }

  /**
   * Generate a human-readable summary of the contract risk assessment
   *
   * @param contractData - The contract data
   * @param riskLevel - The calculated risk level
   * @param riskFactors - The identified risk factors
   * @returns A summary string
   */
  private _generateSummary(
    contractData: ContractData,
    riskLevel: RiskLevel,
    riskFactors: RiskFactor[],
  ): string {
    const tokenName = contractData.token_name || "Unknown";
    const tokenSymbol = contractData.token_symbol || "Unknown";

    if (riskLevel === this.SAFE) {
      return `${tokenName} (${tokenSymbol}) appears to be a safe contract with no significant red flags detected.`;
    }

    const highRiskFactors = riskFactors.filter(
      (f) => f.severity === this.HIGH_RISK,
    );

    if (riskLevel === this.HIGH_RISK) {
      const factorList = highRiskFactors
        .slice(0, 3)
        .map((f) => f.factor)
        .join(", ");
      return `${tokenName} (${tokenSymbol}) has HIGH RISK factors including: ${factorList}.`;
    } else if (riskLevel === this.MEDIUM_RISK) {
      const mediumRiskFactors = riskFactors.filter(
        (f) => f.severity === this.MEDIUM_RISK,
      );
      const factorList = mediumRiskFactors
        .slice(0, 3)
        .map((f) => f.factor)
        .join(", ");
      return `${tokenName} (${tokenSymbol}) has MEDIUM RISK factors including: ${factorList}.`;
    } else {
      const lowRiskFactors = riskFactors.filter(
        (f) => f.severity === this.LOW_RISK,
      );
      const factorList = lowRiskFactors
        .slice(0, 3)
        .map((f) => f.factor)
        .join(", ");
      return `${tokenName} (${tokenSymbol}) has LOW RISK factors including: ${factorList}.`;
    }
  }

  /**
   * Extract important details from the contract data
   *
   * @param contractData - The contract data
   * @returns A dictionary of important contract details
   */
  private _extractImportantDetails(contractData: ContractData): DetailedData {
    // Extract liquidity information
    const liquidityInfo: DetailedData["liquidity"]["sources"] = [];
    let totalLiquidity = 0;

    for (const dex of contractData.dex || []) {
      const liquidity = parseFloat(dex.liquidity || "0");
      totalLiquidity += liquidity;

      liquidityInfo.push({
        name: dex.name || "Unknown",
        type: dex.liquidity_type || "Unknown",
        liquidity: liquidity,
        pair: dex.pair || "",
      });
    }

    // Extract token distribution
    const distributionInfo: DetailedData["distribution"] = [];
    for (const holder of (contractData.holders || []).slice(0, 10)) {
      // Top 10 holders
      distributionInfo.push({
        address: holder.address || "",
        is_contract: holder.is_contract === 1,
        balance: parseFloat(holder.balance || "0"),
        percent: parseFloat(holder.percent || "0") * 100, // Convert to percentage
        is_locked: holder.is_locked === 1,
      });
    }

    // Compile the details
    return {
      token_info: {
        name: contractData.token_name || "Unknown",
        symbol: contractData.token_symbol || "Unknown",
        total_supply: contractData.total_supply || "Unknown",
        holder_count: parseInt(contractData.holder_count || "0", 10),
      },
      contract_info: {
        creator: contractData.creator_address || "Unknown",
        owner: contractData.owner_address || "Unknown",
        is_open_source: contractData.is_open_source === "1",
        is_proxy: contractData.is_proxy === "1",
      },
      tax_info: {
        buy_tax: parseFloat(contractData.buy_tax || "0"),
        sell_tax: parseFloat(contractData.sell_tax || "0"),
      },
      liquidity: {
        total: totalLiquidity,
        sources: liquidityInfo,
        lp_holder_count: parseInt(contractData.lp_holder_count || "0", 10),
      },
      distribution: distributionInfo,
    };
  }

  /**
   * Get empty detailed data structure for error cases
   */
  private _getEmptyDetailedData(): DetailedData {
    return {
      token_info: {
        name: "Unknown",
        symbol: "Unknown",
        total_supply: "0",
        holder_count: 0,
      },
      contract_info: {
        creator: "Unknown",
        owner: "Unknown",
        is_open_source: false,
        is_proxy: false,
      },
      tax_info: {
        buy_tax: 0,
        sell_tax: 0,
      },
      liquidity: {
        total: 0,
        sources: [],
        lp_holder_count: 0,
      },
      distribution: [],
    };
  }
}

// Example usage
async function main() {
  const detector = new SmartContractDetector();

  // Example contract address (from the provided sample)
  const contractAddress = "0xe0f63a424a4439cbe457d80e4f4b51ad25b2c56c";

  try {
    const assessment = await detector.analyzeContract(contractAddress);
    console.log(JSON.stringify(assessment, null, 2));
  } catch (error) {
    logger.error(`Error analyzing contract: ${error}`);
  }
}

// Run the example if executed directly
if (require.main === module) {
  main().catch((err) => {
    console.error("Unhandled error:", err);
    process.exit(1);
  });
}

// Export the class for use in other modules
export { SmartContractDetector, RiskLevel, ContractAssessment, RiskFactor };
