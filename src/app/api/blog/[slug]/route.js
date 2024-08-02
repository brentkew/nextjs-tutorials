import { connectToDB } from "@/lib/utils";
import { Post } from "@/models/Post";
import { NextResponse } from "next/server";

// Getting Single Post Data
export const GET = async (request, {params})=> {
    const {slug} = params;
    try {
        connectToDB();
        const post = await Post.findOne({slug: slug});
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error("Something weng wrog...");
    }
}

// Delete Post
// await fetch(`http://localhost:3000/api/blog/${slug}`, {method: "DELETE"});
export const DELETE = async(request, {params})=> {
    const {slug} = params;
    try {
        connectToDB();
        await Post.deleteOne({slug: slug});
        return NextResponse.json("Post has been deleted.")
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong...")
    }
}