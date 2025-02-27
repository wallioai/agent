import mongoose, { Document } from "mongoose";

export interface INetwork extends Document {
  id: string;
  chainId: number;
  symbol?: string;
  currency: string;
  name: string;
  nameId: string;
  shortName: string;
  coingeckoId?: string;
  rpcUrls: string[];
  wssUrls: string[];
  explorerUrl: string;
  multicallAddress?: string;
  isEnabled: boolean;
  isActive: boolean;
  type: NetworkType;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum NetworkType {
  testnet = "testnet",
  mainnet = "mainnet",
}

const NetworkSchema = new mongoose.Schema<INetwork>(
  {
    chainId: { type: Number, required: true, index: true },
    symbol: String,
    currency: {
      type: String, // Define as a string type
      required: true,
    },
    name: String,
    nameId: { type: String, required: true, index: true, unique: true },
    shortName: String,
    coingeckoId: String,
    rpcUrls: { type: [String], select: false },
    wssUrls: { type: [String], select: false },
    explorerUrl: String,
    multicallAddress: String,
    isEnabled: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    type: {
      type: String, // Define as a string type
      enum: Object.values(NetworkType), // Use enum values directly
      required: true,
    },
    icon: String,
  },
  {
    toJSON: {
      transform(doc, ret, options) {
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  },
);

export default mongoose.models.Network ||
  mongoose.model("Network", NetworkSchema);
