export interface IUser {
  _id?: string;
  id?: string;
  uniqueId: string;
  avatar?: string;
  wallet?: string;
  name: string;
  username?: string;
  email: string;
  emailVerified: boolean;
  isOnboarded: boolean;
  createdAt?: string;
  updatedAt?: string;
}
