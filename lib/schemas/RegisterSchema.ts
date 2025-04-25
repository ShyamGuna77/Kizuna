

import { z } from "zod";

export const registerSchema = z.object({
    name:z.string().min(4,{message:"Name is required"}),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must contain 6 letters",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
