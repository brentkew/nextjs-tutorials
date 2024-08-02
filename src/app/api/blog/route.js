import { connectToDB } from "@/lib/utils";
import { Post } from "@/models/Post";
import { NextResponse } from "next/server";



export const GET = async (request) => {
  try {
    connectToDB();
    const post = await Post.find();
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }
};