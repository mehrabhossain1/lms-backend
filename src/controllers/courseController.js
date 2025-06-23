const Course = require("../models/Course");

const getAllCourses = async (req, res) => {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({
        message: "Courses fetched successfully",
        count: courses.length,
        courses,
    });
};

const getCourseById = async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json({
        message: "Course fetched successfully",
        course,
    });
};

const createCourse = async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({
        message: "Course created successfully",
        course,
    });
};

const updateCourse = async (req, res) => {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({
        message: "Course updated successfully",
        course: updated,
    });
};

const deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({
        message: "Course deleted successfully",
    });
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
};
