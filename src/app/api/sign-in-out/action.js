"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "../auth/[...nextauth]/route";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return error.message;
      }
    }
    throw error;
  }
}

export async function logoutuser() {
  try {
    await signOut({ redirect: true });
  } catch (error) {
    if (error instanceof AuthError) {
      return "Something went wrong.";
    }
    throw error;
  }
}
