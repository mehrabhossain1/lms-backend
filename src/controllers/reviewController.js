const Review = require("../models/Review");

const addReview = async (req, res) => {
    const { rating, comment } = req.body;
    const courseId = req.params.courseId;

    const review = new Review({
        courseId,
        studentId: req.user.id,
        rating,
        comment,
    });

    await review.save();
    res.status(201).json(review);
};

const getCourseReviews = async (req, res) => {
    const courseId = req.params.courseId;
    const reviews = await Review.find({ courseId }).populate(
        "studentId",
        "name"
    );
    res.json({
        message: "Reviews fetched successfully",
        count: reviews.length,
        reviews,
    });
};

module.exports = {
    addReview,
    getCourseReviews,
};
