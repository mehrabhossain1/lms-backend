const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: { type: Number, required: true },
        comment: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
