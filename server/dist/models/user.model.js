import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'instructor'],
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    watching: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    saved: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    verificationToken: { type: String },
    verificationExpire: { type: Date },
    passwordToken: { type: String },
    passwordExpire: { type: Date },
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;
