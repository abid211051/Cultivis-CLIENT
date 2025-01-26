"use server";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Users from "@/models/userModels";

export const POST = async (request) => {
  try {
    await dbConnect();
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmpassword = data.get("confirmpassword");
    const role = data.get("role");
    const image = data.get("picture");

    if (role === "admin") {
      return NextResponse.json({
        status: 400,
        message: "Unauthorized role assignment",
      });
    }
    if (
      image.size > 0 &&
      image.size < 2098000 &&
      ["image/png", "image/jpeg", "image/jpg"].includes(image.type)
    ) {
      // Handle image upload Logic here
    }

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
        status: 400,
      });
    }
    if (password !== confirmpassword) {
      return NextResponse.json({
        status: 400,
        message: "Passwords do not match",
      });
    }
    const hashedPassword = await bcrypt.hash(confirmpassword, 10);
    const newUser = new Users({
      name,
      email,
      role,
      password: hashedPassword,
    });
    await newUser.save();
    return NextResponse.json({
      status: 200,
      message: "Account created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
};
