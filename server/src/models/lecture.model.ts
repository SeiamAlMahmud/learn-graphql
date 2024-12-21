import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const videoUrlSchema = new mongoose.Schema({
    _480p: {
        type: String,
        required: true
    },
    _720p: {
        type: String,
        required: true
    },
    _1080p: {
        type: String,
        required: true
    }
});

const lectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    resources: [resourceSchema],
    videoUrl: videoUrlSchema,
    duration: {
        type: Number,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true
    },
    isPreview: {
        type: Boolean,
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

const Lecture = mongoose.model('Lecture', lectureSchema);

export default Lecture;
