import NextAuth from "next-auth";
import { authConfig } from "./authconfig";

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);

export const { GET, POST } = handlers;
