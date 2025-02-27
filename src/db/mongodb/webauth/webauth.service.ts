import WebAuth, { IWebAuth } from "./webauth.model";
import Base from "../base";

class WebAuthService extends Base<IWebAuth> {
  constructor() {
    super(WebAuth);
  }
}

const webAuthService = new WebAuthService();
export default webAuthService;
