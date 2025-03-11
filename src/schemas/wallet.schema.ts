import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const ImportWalletSchema = z.object({
  key: z
    .string()
    .describe("Your account private key")
    .min(64, { message: "Private key must be at least 64 characters long" }) // Minimum length
    .max(66, { message: "Private key must be at most 66 characters long" }) // Maximum length
    // .regex(/^0x[0-9a-fA-F]{64}$/, {
    //   message:
    //     "Private key must be a valid hexadecimal string starting with '0x'",
    // }), // Hex format validation
});

export const importWalletResolver = zodResolver(ImportWalletSchema);
