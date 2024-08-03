import { connectToDB } from "@/lib/utils";
import { User } from "@/models/User";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { login } from "@/lib/actions";




const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),   
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      }
    }) 
    // ...add more providers here
  ],
  callbacks: {
    async signIn({user, account, profile}) {
      try {
        if(account.provider==='github') {
          connectToDB();
          console.log("user.email", user.email)
          const userInfo = await User.findOne({email: user.email});
          if(!userInfo) {
            // Create new User
            const newUser = new User({
              username: user.name,
              email: user.email,
              profileImage: user.image,
              isAdmin: user.email==='brentkew@gmail.com' ? true: false,
              provider: account.provider
            })
            await newUser.save();
          }
        } 
        else if(account.provider === 'credentials') { 
          return {error: user}
        }
      } catch (error) {
        console.log(error)
        throw new Error("Something went wrong...");
      }
      return true;
    }
  }
})


export {handler as GET, handler as POST};