import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max:20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    loginType: {
        type: String,
    },
    provider: {
        type: String,
    },
}, {timestamp: true})

export const User = mongoose.models.User || mongoose.model("User", UserSchema);