import { model, Schema } from "mongoose";



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
        required: true,
        default: Date.now,
    },
    highestCorrected: {
        type: Number,
        required: true,
        default: 0,
    },
    timeLearned: {
        type: Number,
        required: true,
        default: 0,
    },
    visible: {
        type: Boolean,
        required: true,
        default: true,
    },

    //add course stats for user
})

const UserCourse = model('userCourse', userCourseSchema);
export default UserCourse;