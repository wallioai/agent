import Token, { IToken } from "./token.model";
import Base from "../base";

class TokenService extends Base<IToken> {
  constructor() {
    super(Token);
  }

  async findByChain(chainId: number) {
    const tokens = await this.findAll({ chainId });
    return tokens.map((t) => t.toJSON());
  }
}

const tokenService = new TokenService();
export default tokenService;
