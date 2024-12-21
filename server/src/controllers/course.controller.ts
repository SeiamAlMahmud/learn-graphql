import Course from "../models/course.model.js"
import Lecture from "../models/lecture.model.js";

const getAllCourses = async () => {
    try {
        const courses = await Course.find();
        return courses || [];
    } catch (error) {
        console.log(error)
    }
}

const getCourseById = async (_: any, { id }: { id: string }) => {
    try {
        const course = await Course.findById(id);
        // console.log(id)
        return course;
    } catch (error) {
        console.log(error)
    }
}

const getAllLectures = async () => {
    try {
        const lectures = await Lecture.find();
        return lectures || [];
    } catch (error) {
        console.log(error)
    }
}

export { getAllCourses, getCourseById, getAllLectures }