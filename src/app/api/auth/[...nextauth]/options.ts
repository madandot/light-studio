import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";

export const options: NextAuthOptions = {
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID!,
         clientSecret: process.env.GITHUB_SECRET!,
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_ID!,
         clientSecret: process.env.GOOGLE_SECRET!,
      }),
      CredentialsProvider({
         name: "Credentials",
         credentials: {
            username: {
               label: "username",
               type: "text",
               placeholder: "Enter your username",
            },
            password: {
               label: "password",
               type: "password",
               placeholder: "Enter your Password",
            },
         },
         async authorize(credentials) {
            const user = { id: "1001", name: "madan", password: "madan" };
            if (credentials?.username === user.name && credentials?.password === user.password) {
               return user;
            } else {
               return null;
            }
         },
      }),
   ],
};
