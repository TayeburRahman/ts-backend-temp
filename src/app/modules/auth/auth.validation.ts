import { z } from "zod";

// --- CREATE ACCOUNT VALIDATION ---
const create = z.object({
  body: z.object({
    firstName: z
      .string({ required_error: "First Name is required" })
      .min(1, "First name cannot be empty"),
    lastName: z
      .string({ required_error: "Last Name is required" })
      .min(1, "Last name cannot be empty"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email format"),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters long"),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    role: z.enum(["CUSTOMER", "ADMIN", "AGENT", "SUPER_ADMIN"]),
  }),
});

// --- UPDATE USER PROFILE ---
const updateUserZodSchema = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),
    email: z.string().email("Invalid email format").optional(),
    phoneNumber: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters").optional(),
    address: z.string().optional(),
    profile_image: z.string().optional(),
    role: z.enum(["CUSTOMER", "ADMIN", "AGENT", "SUPER_ADMIN"]).optional(),
    date_of_birth: z.string().optional(), // can parse later to Date
  }),
});

// --- LOGIN ---
const loginZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
    password: z.string({ required_error: "Password is required" }),
  }),
});

// --- REFRESH TOKEN ---
const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: "Refresh Token is required" }),
  }),
});

const blockUnblockUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
    }).email("Invalid email format"),
    role: z.enum(["CUSTOMER", "ADMIN", "SUPER_ADMIN"], {
      required_error: "Role is required",
    }),
    is_block: z.boolean({
      required_error: "is_block flag is required",
    }),
  }),
});

export const AuthValidation = {
  create,
  updateUserZodSchema,
  loginZodSchema,
  refreshTokenZodSchema,
  blockUnblockUserZodSchema
};
