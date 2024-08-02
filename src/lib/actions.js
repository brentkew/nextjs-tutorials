'use server'

import { Post } from "@/models/Post";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";

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