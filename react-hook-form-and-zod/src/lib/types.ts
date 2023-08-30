import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10).max(100),
    passwordConfirmation: z.string().min(10).max(100),
    name: z.string().min(2).max(100),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
