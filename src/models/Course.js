const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,
        category: String,
        price: Number,
        videoUrl: String,
        isFree: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
