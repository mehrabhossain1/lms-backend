const User = require("../models/User");

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

module.exports = {
    getEnrolledCourses,
};
