import { User } from "../Models/UserSchema";
import { z } from "zod";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const signUpSchema = z.object({
  username: z
    .string()
    .min(8, { message: "Username must be of length 8" })
    .max(10, { message: "Username max length should be less than or equal to 10" }),
  password: z
    .string()
    .min(8, { message: "Password must be of length 8 or greater" }),
});

type SignupInput = z.infer<typeof signUpSchema>;

export const SignUp = async (req: Request, res: Response) => {
  const parsed = signUpSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Validation Failed",
      errors: parsed.error.format(), // helpful for debugging
    });
  }

  const { username, password }: SignupInput = parsed.data;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Signup error", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
