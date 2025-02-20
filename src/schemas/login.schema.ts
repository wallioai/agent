import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginWebAuthSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email address")
    .describe("The email address associated with you smart account")
    .toLowerCase(),
  options: z.string(),
});

export const LoginSchema = LoginWebAuthSchema.omit({
  options: true,
});
export const loginSchemaResolve = zodResolver(LoginSchema);
