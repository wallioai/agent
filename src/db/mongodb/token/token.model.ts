import mongoose, { Document, Types } from "mongoose";

export interface IToken extends Document {
  network: Types.ObjectId;
  id: string;
  chainId: number;
  address: string;
  aggregator?: string;
  name: string;
  symbol: string;
  decimal: number;
  isEnabled: boolean;
  isActive: boolean;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

const TokenSchema = new mongoose.Schema<IToken>(
  {
    network: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Network",
      required: true,
    },
    chainId: { type: Number, required: true, index: true },
    address: { type: String, lowercase: true },
    aggregator: { type: String, lowercase: true },
    name: String,
    symbol: String,
    decimal: Number,
    isEnabled: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
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

export default mongoose.models.Token || mongoose.model("Token", TokenSchema);
