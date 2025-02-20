import mongoose, { Document } from "mongoose";

export interface IWebAuth extends Document {
  user: string;
  id: string;
  challenge?: string | null;
  email: string;
  attestationObject: string;
  publicKey: string;
  counter: number;
  deviceType: string;
  credentialBackedUp: Boolean;
  transports: [string];
  createdAt: Date;
  updatedAt: Date;
}

const WebAuthSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    id: { type: String, required: true, unique: true },
    challenge: String,
    email: { type: String, lowercase: true, unique: true },
    attestationObject: String,
    publicKey: String,
    counter: { type: Number, default: 0 },
    deviceType: String,
    credentialBackedUp: Boolean,
    transports: [String],
  },
  { timestamps: true },
);

export default mongoose.models.WebAuth ||
  mongoose.model("WebAuth", WebAuthSchema);
