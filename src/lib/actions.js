'use server'

import { Post } from "@/models/Post";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import { User } from "@/models/User";
import bcrypt from 'bcryptjs'
import { signIn } from "next-auth/react";

export const sayHello = async () => {
  console.log("Server action clicked");
};


export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    console.log("Something went wrong...");
  }
};



export const deletePost = async (formData) => {
  const { userId } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Post.findByIdAndDelete(userId);
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    console.log("Something went wrong...");
  }
  console.log("Delete Post action clicked");
};


export const registerUser = async ( previousState,formData) => {
  const {username, email, password, passwordAgain, image} = Object.fromEntries(formData);
  try {
    connectToDB();
    const userInfo = await User.findOne({email: email})
    if(userInfo) {
      return {error: "User already exists"};
    }
    if(password !== passwordAgain) {
      return {error: "Password does not match"};
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
      profileImage: image,
      isAdmin: false,
      provider: "website"
    })

    await newUser.save();
    return { success: true }

  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" }
  }
}


export const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({email: credentials.email})
    if(!user) {
      return {error: "User not found"}
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if(!isPasswordCorrect) {
      return {error: "Password is not correct"}
    }

    return user;

  } catch (error) {
      console.log(error)
      throw new Error("Failed to login")
  }
}