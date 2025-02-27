import Network, { INetwork } from "./network.model";
import Base from "../base";

class NetworkService extends Base<INetwork> {
  constructor() {
    super(Network);
  }
}

const networkService = new NetworkService();
export default networkService;
