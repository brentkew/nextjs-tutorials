import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
}, {timestamp: true})

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema); 