'use server'

import { Post } from "@/models/Post";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import { User } from "@/models/User";
import bcrypt from 'bcrypt'

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


export const registerUser = async (formData) => {
  const {username, email, password, passwordAgain, image} = Object.fromEntries(formData);
  try {
    connectToDB();
    const userInfo = await User.findOne({email: email})
    if(userInfo) {
      return "User already exists"
    }
    if(password !== passwordAgain) {
      return "Password does not match";
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
    return "User have be registered"

  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong...")
  }
}

export const websiteLogin = async(formData)=> {
  const { username, password } = Object.fromEntries(formData);

  return;
}