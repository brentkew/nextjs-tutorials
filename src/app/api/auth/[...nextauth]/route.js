import { connectToDB } from "@/lib/utils";
import { User } from "@/models/User";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { login } from "@/lib/actions";
import { authConfig } from "@/lib/auth.Config";




const handler = NextAuth({
  // Configure one or more authentication providers
  ...authConfig,
  session: {
    strategy: 'jwt'
  },
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
        credentails: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        try {
          // Fetch user based on the credentials provided
          const user = await login(credentials);
          // If no user or an error message is present, return null
          if (!user || user.error) {
            return null;
          }
          
          return user;

        } catch (error) {
          console.error("Error during authorization:", error);
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
          if (!user) {
            // If no user is returned, throw an error
            throw new Error("Invalid credentials");
          }
          console.log("User authenticated via credentials:", user);
        }
      } catch (error) {
        console.log(error)
        throw new Error("Something went wrong...");
      }
      return true;
    },
    async session({session, token}) {
      if(token) {
        session.user.isAdmin = token.isAdmin;
        session.user.name = token.name;
        session.user.image = token.image;
      }
      return session;
    },
    async jwt({token, user}) {
      if(user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.image = user.profileImage;
        token.name = user.username;
      }
      return token;
    }
  },
  ...authConfig.callbacks,
})


export {handler as GET, handler as POST};