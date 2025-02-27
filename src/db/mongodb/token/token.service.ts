import Token, { IToken } from "./token.model";
import Base from "../base";

class TokenService extends Base<IToken> {
  constructor() {
    super(Token);
  }
}

const tokenService = new TokenService();
export default tokenService;
