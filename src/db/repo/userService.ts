import User, { IUser } from "../models/user.model";
import Base from "./base";

class UserService extends Base<IUser> {
  constructor() {
    super(User);
  }

  async findByEmail(email: string) {
    return this.findOne({ email });
  }
}

const userService = new UserService();
export default userService;
