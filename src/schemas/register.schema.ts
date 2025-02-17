import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterSchema = z.object({
  name: z.string().min(5).describe("You smart account display name"),
  email: z
    .string()
    .email("Enter a valid email address")
    .describe("The email address associated with you smart account"),
  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    })
    .describe("Terms and conditions"),
});

export const registerSchemaResolve = zodResolver(RegisterSchema);
