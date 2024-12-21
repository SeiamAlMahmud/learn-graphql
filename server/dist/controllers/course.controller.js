import Course from "../models/course.model.js";
const getAllCourses = async () => {
    try {
        const courses = await Course.find();
        return courses || [];
    }
    catch (error) {
        console.log(error);
    }
};
const getCourseById = async (_, { id }) => {
    try {
        const course = await Course.findById(id);
        // console.log(id)
        return course;
    }
    catch (error) {
        console.log(error);
    }
};
export { getAllCourses, getCourseById };
