const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    getCourseById,
} = require("../controllers/courseController");

// Public
router.get("/", getAllCourses);
router.get("/:id", getCourseById);

// Admin only
router.post("/", verifyToken, authorizeRoles("admin"), createCourse);
router.put("/:id", verifyToken, authorizeRoles("admin"), updateCourse);
router.delete("/:id", verifyToken, authorizeRoles("admin"), deleteCourse);

module.exports = router;
