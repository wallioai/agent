import { z } from "zod";
import { ObjectId } from "mongodb";

// Helper function to create a Zod schema for ObjectId
const objectIdSchema = z.custom<ObjectId>((val) => val instanceof ObjectId, {
  message: "Invalid ObjectId",
});

export const WebAuthSchema = z.object({
  _id: objectIdSchema,
  user: objectIdSchema,
  id: z.string(),
  challenge: z.string().optional(),
  email: z.string().email().toLowerCase(),
  attestationObject: z.string().optional(),
  publicKey: z.string().optional(),
  counter: z.number().default(0),
  deviceType: z.string().optional(),
  credentialBackedUp: z.boolean().optional(),
  transports: z.array(z.string()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type WebAuth = z.infer<typeof WebAuthSchema>;

// Schema for creating a new WebAuth (without _id, createdAt, updatedAt)
export const CreateWebAuthSchema = WebAuthSchema.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
});

export type CreateWebAuth = z.infer<typeof CreateWebAuthSchema>;
