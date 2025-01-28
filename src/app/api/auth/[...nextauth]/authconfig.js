import { NextAuthConfig } from "next-auth";
import dbConnect from "@/lib/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/models/userModels";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        try {
          await dbConnect();
          const user = await Users.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("No user found");
          }
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) {
            throw new Error("Invalid password");
          }
          return user;
        } catch (error) {
          console.log("From authorize: ", error);

          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   await dbConnect();

    //   const isUserExist = await Users.findOne({ email: user?.email });
    //   if (!isUserExist) {
    //     const newuser = new Users({ name: user?.name, email: user?.email });
    //     await newuser.save();
    //   }
    //   return true;
    // },
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        // token.image = user.image
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        // session.user.image = token.image
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
};
