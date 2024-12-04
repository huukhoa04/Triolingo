import { model, Schema } from "mongoose";
import dateFormat from "../utils/helpers.js";
const userCourseSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    courseId: {
        type: Number,
        required: true,
        unique: true,
    },
    dateJoined: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    highestCorrected: {
        type: Number,
        // required: true,
        default: 0,
    },
    total: {
        type: Number,
        // required: true,
        default: 30,
    },
    timeLearned: {
        type: Number,
        // required: true,
        default: 0,
    },
    isCompleted: {
        type: Boolean,
        // required: true,
        default: false,
    },
    visible: {
        type: Boolean,
        // required: true,
        default: true,
    },

    //add course stats for user
})

const UserCourse = model('userCourse', userCourseSchema);
export default UserCourse;