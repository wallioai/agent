import { z } from "zod";
import { ObjectId } from "mongodb";

// Helper function to create a Zod schema for ObjectId
const objectIdSchema = z.custom<ObjectId>((val) => val instanceof ObjectId, {
  message: "Invalid ObjectId",
});

// User Schema
export const UserSchema = z.object({
  _id: objectIdSchema,
  uniqueId: z.string(),
  wallet: z.string().toLowerCase().optional(),
  avatar: z.string().optional(),
  name: z.string().optional(),
  username: z.string().toLowerCase().optional(),
  email: z.string().email().toLowerCase(),
  emailVerified: z.boolean().optional(),
  isOnboarded: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

// Schema for creating a new User (without _id, createdAt, updatedAt)
export const CreateUserSchema = UserSchema.omit({
  _id: true,
  uniqueId: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  email: z.string().email().toLowerCase(),
  name: z.string().toLowerCase(),
  fromGoogle: z.boolean(),
});

export type CreateUser = z.infer<typeof CreateUserSchema>;
