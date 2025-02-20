import mongoose, { Document } from "mongoose";
import { z } from "zod";

// Schema for creating a new User (without _id, createdAt, updatedAt)
export const CreateUserSchema = z.object({
  email: z.string().email().toLowerCase(),
  name: z.string().toLowerCase(),
  fromGoogle: z.boolean(),
});

export interface IUser extends Document {
  _id: string;
  uniqueId: string;
  wallet: string;
  avatar?: string;
  name: string;
  username?: string;
  email: string;
  emailVerified: boolean;
  isOnboarded: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
  {
    uniqueId: { type: String, unique: true, required: true },
    wallet: { type: String, lowercase: true },
    avatar: String,
    name: String,
    username: { type: String, lowercase: true },
    email: { type: String, lowercase: true, unique: true, required: true },
    password: String,
    emailVerified: Boolean,
    isOnboarded: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
