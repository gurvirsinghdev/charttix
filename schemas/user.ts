import z from "zod";

export const loginUserSchema = z.object({
  email: z.email("Please enter a valid email address!"),
  password: z.string(),
});

export const createUserSchema = z.object({
  email: z.email("Please enter a valid email address!"),
  password: z
    .string()
    .min(8, "Password needs to be atleast 8 characters long!")
    .max(63, "Password cannot be more than 63 characters!"),
  full_name: z
    .string()
    .min(3, "Full name cannot be less than 3 characters long!")
    .max(32, "Full name cannot exceed 32 characters!"),
});
