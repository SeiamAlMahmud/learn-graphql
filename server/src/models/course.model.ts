import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ratingsAverage: {
        type: Number,
        required: true
    },
    ratingsQuantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    lebel: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    whatYouWillEarn: {
        type: [String],
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    targetAudience: {
        type: [String],
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true
    },
    isFree: {
        type: Boolean,
        required: true
    },
    isApproved: {
        type: Boolean,
        required: true
    },
    isRejected: {
        type: Boolean,
        required: true
    },
    isFeatured: {
        type: Boolean,
        required: true
    },
    isTrending: {
        type: Boolean,
        required: true
    },
    isBestSeller: {
        type: Boolean,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    previewVideo: {
        type: String,
        required: true
    },
    students: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    }
},{timestamps: true});

const Course = mongoose.model('Course', courseSchema);

export default Course;
