const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");

const {
    addReview,
    getCourseReviews,
} = require("../controllers/reviewController");

// Student only (token required)
router.post("/:courseId", verifyToken, addReview);

// Public: see reviews of a course
router.get("/:courseId", getCourseReviews);

module.exports = router;
