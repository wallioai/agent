`
Response Details
Contract Security
Security Items	Parameter	Description	Notice
Open Source	is_open_source	Returns "1" if the contract is open-source, "0" if the contract is closed-source.	Closed-sourced contracts may hide various unknown mechanisms and are extremely risky. When the contract is closed-source, other risk items will return null.
Proxy Contract	is_proxy	Returns "1" if the contract is a proxy contract, "0" if the contract is not a proxy contract.
This value will not be returned if the proxy status of the contract is unknown.	(1) Will not be returned if "is_open_source" is 0.
(2) Most proxy contracts are accompanied by implementation contracts which are modifiable, potentially containing significant risk. When the contract is a proxy, other risk items may not be returned.
Mint Function	is_mintable	Returns "1" if the contract has the ability to mint tokens, "0" if the contract does not have the ability to mint tokens.
This value will not be returned if the minting ability of the contract is unknown.	(1) Will not be returned if "is_open_source" is 0.
(2) May not be returned if "is_proxy" is 1.
(3) Mint functions can trigger a massive sell-off, causing the coin price to plummet. It is an extremely risky function for a contract to have.
(4) This function generally relies on ownership. When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, this function will most likely be disabled.
Owner Address	owner_address	This contract's owner address. No value will be returned if the owner address is unknown. An empty sting will be returned if the contract has no owner.	(1) Will not be returned if "is_open_source" is 0.
(2) May not be returned if "is_proxy" is 1.
(3) Ownership is usually used to adjust the parameters and status of the contract, such as minting, modification of slippage, suspension of trading, setting blacklist, etc. When the contract's owner cannot be retrieved, is a black hole address, or does not have an owner, ownership-related functionality will most likely be disabled.
Take Back Ownership	can_take_back_ownership	Returns "1" if ownership can be reclaimed; "0" if it cannot. Will not be returned if reclamation data is unknown.	(1) Will not be returned if "is_open_source" is 0.
(2) May not be returned if "is_proxy" is 1.
(3) Ownership is usually used to adjust the parameters and status of the contract, such as minting, modification of slippage, suspension of trading, setting blacklist, etc. When the contract's owner cannot be retrieved, is a black hole address, or does not have an owner, ownership-related functionality will most likely be disabled. These risky functions may be able to be reactivated if ownership is reclaimed.
Owner Can Change Balance	owner_change_balance	Returns "1" if the contract owner can change token holder balances; "0" if it cannot. Will not be returned if reclamation data is unknown.	(1) Will not be returned if "is_open_source" is 0.
(2) May not be returned if "is_proxy" is 1.
(3) Tokens with this feature allow the owner to modify anyone's balance, resulting in a holder's asset to be changed (i.e. to 0) or a massive minting and sell-off.
(4) This function generally relies on ownership. When the contract's owner cannot be retrieved, is a black hole address, or does not have an owner, ownership-related functionality will most likely be disabled.
With Hidden Owner	hidden_owner	Returns "1" if the contract has hidden owners;
"0" if it does not.
Will not be returned if hidden ownership status is unknown.	(1) Will not be returned if "is_open_source" is 0.
(2) May not be returned if "is_proxy" is 1.
(3) Hidden ownership is used by developers to maintain ownership ability even after abandoning ownership, and is often an indicator of malicious intent. When a hidden owner exists, it is safe to assume that ownership has not been abandoned.
Self-Destruct	selfdestruct	Returns "1" if the contract can self-destruct;
"0" if it cannot.
Will not be returned if self-destruct data is unknown.	(1) Will not be returned if "is_open_source" is 0.
(2) When the self-destruct function is triggered, the contract will be destroyed, all of its functions will be unavailable, and all related assets will be erased.
With External Call	external_call	Returns "1" if the contract can call functions in other contracts during the execution of primary methods;
"0" if it does not.
Will not be returned if external call capability is unknown.	(1) Will return no data if "is_open_source" is 0.
(2) External calls causes the implementation of this contract to be dependent on other external contracts which may or may not be risky.
Gas abuse	gas_abuse	Return "1" if the contract is using user's gas fee to mint other assets.
No return means no evidence of gas abuse.	Any interaction with such addresses may result in loss of property.
Trading Security
Security Item	Parameter	Description	Notice
Is in DEX	is_in_dex	Returns "1" if the token can be traded in a decentralized exchange; "0" if not.	Only true if the token has a marketing pair with mainstream coins/tokens.
Buy Tax	buy_tax	Returns the buy tax of the token on a scale from 0 - 1. An empty string ("") means that the tax is unknown.	(1) Will not be returned if "is_in_dex" is 0.
(2) When buying a token, a buy tax will cause the actual token value received to be less than the amount paid. An excessive buy tax may lead to heavy losses.
(3) A "buy_tax" of "1", or a 100% buy tax, will result in all purchase funds to go towards the tax. This results in a token that is effectively not able to be purchased.
(4) A token's anti-bot mechanism may affect our sandbox environment, resulting in a "cannot_buy" of "1". This will cause the "buy_tax" to also return "1".
(5) Some tokens are designed not to be sold, indicated by the "cannot_buy" to return "1". A "cannot_buy" of "1" will cause the display of "buy_tax" to also be "1".
Sell Tax	sell_tax	It describes the tax when selling the token. An empty string ("") means unknown.	(1) When "is_in_dex": "0", there will be no return.
(2) Sell tax will cause the actual value received when selling a token to be less than expected, and too much buy tax may lead to large losses.
(3) When "sell_tax": "1", it means sell-tax is 100% or this token cannot be sold.
(4) Sometimes token's trading-cool-down mechanism would affect our sandbox system. When "trading_cooldown": "1", "sell_tax" may return "1".
Cannot be bought	cannot_buy	It describes whether the Token can be bought. "1" means true; "0" means false; No return means unknown.	(1) Generally, "cannot_buy": "1" would be found in Reward Tokens. Such Tokens are issued as rewards for some on-chain applications and cannot be bought directly by users.
(2) Sometimes token's anti-bot mechanism would affect our sandbox system, causing the display of "buy_tax": "1".
(3) When “cannot_buy”: "1", our sandbox system might be blocked, causing the display of "buy_tax": "1" and "sell_tax": "1"
Cannot Sell All	cannot_sell_all	It describes whether the contract has the function restricting the token holders from selling all the tokens. "1" means true; "0" means false; No return means unknown.	(1) When "is_in_dex": "0", there will be no return.
(2) This feature means that you will not be able to sell all your tokens in a single sale. Sometimes you need to leave a certain percentage of the token, e.g. 10%, sometimes you need to leave a fixed number of tokens, such as 10 tokens.
(3) When "buy_tax": "1", there will be no return.
Modifiable Tax	slippage_modifiable	It describes whether the trading tax can be modifiable by token contract. "1" means true; "0" means false; No return means unknown.	(1) When When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
(3) Token with modifiable tax means that the contract owner can modify the buy tax or sell tax of the token. This may cause some losses, especially since some contracts have unlimited modifiable tax rates, which would make the token untradeable.
(4) This function generally relies on ownership. When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, this function will most likely be disabled.
Honeypot	is_honeypot	It describes whether the token is a honeypot. "HoneyPot" means that the token maybe cannot be sold because of the token contract's function, or the token contains malicious code. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
(3) High risk, definitely scam.
Pausable Transfer	transfer_pausable	It describes whether trading can be pausable by token contract. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
(3) This feature means that the contract owner will be able to suspend trading at any time, after that anyone will not be able to sell, except those who have special authority.
(4) This function generally relies on ownership. When the contract does not have an owner (or if the owner is a black hole address) and the owner cannot be retrieved, this function will most likely be disabled.
Blacklist	is_blacklisted	It describes whether the blacklist function is not included in the contract. If there is a blacklist, some addresses may not be able to trade normally. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
(3) The contract owner may add any address to the blacklist, and the token holder in the blacklist will not be able to trade. Abuse of the blacklist function will lead to great risks.
(4) For contracts without an owner (or the owner is a black hole address), the blacklist will not be able to get updated. However, the existing blacklist is still in effect.
Whitelist	is_whitelisted	It describes whether the whitelist function is not included in the contract. If there is a whitelist, some addresses may not be able to trade normally. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
(3) Whitelisting is mostly used to allow specific addresses to make early transactions, tax-free, and not affected by transaction suspension.
(4) For contracts without an owner (or the owner is a black hole address), the whitelist will not be able to get updated. However, the existing whitelist is still in effect.
Dex info	dex	It describes Dex's information on where the token can be traded.
(1) "liquidity_type" the type of the liquidity pool. Only UniV2 and UniV3 is supported.
(2) "name" is the name of the pool contact.
(3) "liquidity" is the total USD value of the liquidity pool.
(4) "pair" is the address of the liquidity pool.	(1) When "is_in_dex": "0", there will be an empty array.
(2) It only counts when the token has a marketing pair with mainstream coins/tokens.
(3) Liquidity is converted to USDT denomination.
Anti Whale	is_anti_whale	It describes whether the contract has the function to limit the maximum amount of transactions or the maximum token position for a single address. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
Modifiable anti whale	anti_whale_modifiable	It describes whether the contract has the function to modify the maximum amount of transactions or the maximum token position. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
(3)When the anti-whale value is set to a very small value, all trading would fail.
Trading with CooldownTime	trading_cooldown	It describes whether the contract has a trading-cool-down mechanism that can limit the minimum time between two transactions. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
Assigned Address' Slippage is Modifiable	personal_slippage_modifiable	It describes whether the owner can set a different tax rate for every assigned address. "1" means true; "0" means false; No return means unknown.	(1) When "is_open_source": "0", there will be no return.
(2) Sometimes, when "is_proxy": "1", there will be no return.
(3) The contract owner may set a very outrageous tax rate for an assigned address to block it from trading. Abuse of this function will lead to great risks.
(4) For contracts without an owner (or the owner is a black hole address), this function would not be able to be used. However, the existing tax rate would be still in effect.
Info Security
Security Items	Parameter	Description	Notice
Token Name	token_name		
Token Symbol	token_symbol		
Token holder number	holder_count	It describes the number of token holders. Example:"holder_count": "4342"	
Token Total Supply	total_supply	It describes the supply number of the token. Example:"total_supply": 100000000	
Top10 holders info	holders	It describes the top 10 holders' info. The info includes:
(1) "address" describes the holder's address; (2) "locked." describes whether the tokens owned by the holder are locked "1" means true; "0" means false;
(3) "tag" describes the address's public tag. Example: Burn Address/Deployer;
(4) "is_contract" describes whether the holder is a contract "1" means true; "0" means false;
(5) "balance" describes the balance of the holder.
(6) "percent" describes the percentage of tokens held by this holder;
(7) "locked_detail" is an array, that describes the lock position info of this holder, and only shows when "locked": 1. This Array may contain multiple objects for multiple locking info. In every object, "amount" describes the number of tokens locked, "end_time" describes when the token will be unlocked, and "opt_time" describes when the token was locked.	(1) About "locked": We only support the token lock addresses or black hole addresses that we have included.
(2) When "locked":0, or lock address is a black hole address, "locked_detail" will be no return.
(3) About "percent": 1 means 100% here.
Owner Balance	owner_balance	It describes the balance of the contract owner.
Example:"owner_balance": 100000000
No return or return empty means there is no ownership or can't find ownership.	When "owner_address" returns empty, or no return, there will be no return.
Token Percentage of Owner	owner_percent	It describes the percentage of tokens held by the contract owner.
Example: "owner_balance": "0.1".
No return or return empty means there is no ownership or can't find ownership.	(1) 1 means 100% here.
(2) When "owner_address" returns empty, or no return, there will be no return.
Creator Address	creator_address	It describes this contract's owner address.	
Creator Balance	creator_balance	It describes the balance of the contract owner. Example:"owner_balance": 100000000.	
Token Percentage of Creator	creator_percent	It describes the percentage of tokens held by the contract owner. Example:"owner_balance": 0.1.	1 means 100% here.
LP token holder number	lp_holder_count	It describes the number of LP token holders.
Example: "lp_holder_count": "4342".
No return means no LP.	When "is_in_dex": "0", there will be no return.
LP Token Total Supply	lp_total_supply	It describes the supply number of the LP token.
Example: "lp_total_supply": "100000000".
No return means no LP.	(1) When "is_in_dex": "0", there will be no return.
(2) It is LP token number, NOT a token number
Top10 LP token holders info	lp_holders	It describes the top 10 LP holders' info. The info includes:
(1) "address" describes the holder's address;
(2) "locked" describes whether the tokens owned by the holder are locked. "1" means true; "0" means false;
(3) “tag” describes the address's public tag. Example: Burn Address/Deployer;
(4) “is_contract” describes whether the holder is a contract "1" means true; "0" means false.
(5) “balance” describes the balance of the holder.
(6) "percent" describes the percentage of tokens held by this holder.
(7) "NFT_list":When "liquidity_type" is UniV3, this parameter will appear. It describes the details of the UniV3 LP Holder's actual position.
I. "value" is the total USD value corresponding to the NFT.
II. "NFT_id" is the NFTID corresponding to the NFT.
III. "amount" is the liquidity quantity corresponding to the NFT.
IV "in_effect" indicates whether the liquidity corresponding to this NFT is effective at the current price.
V. "NFT_percentage" is the proportion of this NFT in the total liquidity.
(7) "locked_detail" is an array, that describes the lock position info of this holder, and only shows when "locked": "1". This Array may contain multiple objects for multiple locking info. In every object, "amount" describes the number of tokens locked, "end_time" describes when the token will be unlocked, and "opt_time" describes when the token was locked.
No return means no LP. When "liquidity_type" is UniV3, the fields "value," "NFT_id," "amount," "in_effect," and "NFT_percentage" will also appear here. The rules are consistent with the "NFT_list."	(1) When "is_in_dex": "0", there will be no return.
(2) About "locked": We only support the token lock addresses or black hole addresses that we have included.
(3) About "percent": 1 means 100% here.
(4) When "locked": "0", or the lock address is a black hole address, "locked_detail" will be no return.
Airdrop Scam	is_airdrop_scam	It describes whether the token is an airdrop scam. "1" means true; "0" means false; None means no result (Because We did not find conclusive information on whether the token is an airdrop scam).	Only "is_airdrop_scam": "1" means it is an airdrop scam.
Trust List	trust_list	It describes whether the token is a famous and trustworthy one. "1" means true; No return no result (Because We did not find conclusive information on whether the token is an airdrop scam).	(1) Only "trust_list": "1" means it is a famous and trustworthy token. (2) No return doesn't mean it is risky.
Other Potential Risks	other_potential_risks	It describes whether the contract has other potential risks. Example: "other_potential_risks": "Owner can set different transaction taxes for each user, which can trigger serious losses."	(1) If we haven't found any other potential risk yet, there will be no return.
(2) Type: string.
Note	note	It describes whether the contract has other things investors need to know. Example: "note": "Contract owner is a multisign contract."	(1) If we haven't found any other thing which is valuable yet, there will be no return.
(2) Type: string.
Fake Token	"fake_token": { "true_token_address": "", "value": },	It indicates whether the token is a counterfeit of a mainstream asset. If it is, the value is set to 1, and true_token_address is the address of the authentic mainstream asset that the token is imitating on this public chain. If there are multiple mainstream assets with the same name, they will be separated by commas.
Example:
"fake_token": { "true_token_address": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8, 0xaf88d065e77c8cc2239327c5edb3a432268e5831", "value": 1 }	If there is no evidence indicating that it is a counterfeit asset, there will be no return.
In Major Cex	"is_in_cex": { "listed": "1", "cex_list": [ ] },	Whether this token has been listed on major centralized exchanges and can be considered widely trusted within the industry, with relatively low risk.
Example
"is_in_cex": { "listed": "1", "cex_list": [ "Binance" ] },	(1) If we cannot find this token in our known CEXs, this field will not be returned. It doesn't mean it is risky
(2) When 'listed' is 1, other risk alerts can generally be ignored, and the token can be considered safe.

`;