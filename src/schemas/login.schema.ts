import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email address")
    .describe("The email address associated with you smart account"),
});

export const loginSchemaResolve = zodResolver(LoginSchema);
