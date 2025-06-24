const User = require("../models/User");

const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ role: "student" }).populate(
            "enrolledCourses"
        );

        res.json({
            message: "Students fetched successfully",
            count: students.length,
            students: students.map((stu) => ({
                id: stu._id,
                name: stu.name,
                email: stu.email,
                enrolledCourses: stu.enrolledCourses.map((c) => ({
                    id: c._id,
                    title: c.title,
                })),
            })),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getAllStudents };
