import { z } from "zod";

export const InputsSchema = z
  .object({
    email: z.string().email().toLowerCase().trim(),
  })
  .required();

export type Inputs = z.infer<typeof InputsSchema>;
