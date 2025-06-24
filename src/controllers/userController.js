const User = require("../models/User");
const Course = require("../models/Course");

const getEnrolledCourses = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId).populate("enrolledCourses");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "Enrolled courses fetched successfully",
            count: user.enrolledCourses.length,
            courses: user.enrolledCourses,
        });
    } catch (error) {
        console.error("Error fetching enrolled courses:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const enrollInCourse = async (req, res) => {
    try {
        const userId = req.user.id;
        const { courseId } = req.params;

        const user = await User.findById(userId);
        const course = await Course.findById(courseId);

        if (!user || !course) {
            return res
                .status(404)
                .json({ message: "User or Course not found" });
        }

        // Prevent duplicate enrollment
        const alreadyEnrolled = user.enrolledCourses.includes(courseId);
        if (alreadyEnrolled) {
            return res
                .status(400)
                .json({ message: "Already enrolled in this course" });
        }

        user.enrolledCourses.push(courseId);
        await user.save();

        res.status(200).json({
            message: "Successfully enrolled in course",
            course: {
                id: course._id,
                title: course.title,
                description: course.description,
            },
        });
    } catch (error) {
        console.error("Error enrolling in course:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getEnrolledCourses,
    enrollInCourse,
};
