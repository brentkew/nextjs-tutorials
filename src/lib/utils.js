import { Post } from '@/models/Post';
import { User } from '@/models/User';
import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connected using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connection.readyState;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Db not connect");
  }
};


export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log("Failed to fetch data");
    throw new Error("Failed to fetch data")
  }
};

export const getSinglePost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({slug: slug});
    return post;
  } catch (error) {
    console.log("Failed to fetch post data");
    throw new Error("Failed to fetch post data");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("Failed to fetch users data");
    throw new Error("Failed to fetch users data");
  }
};

export const getSingleUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("Failed to fetch user data");
    throw new Error("Failed to fetch user data");
  }
};


