const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const dbConnect = require("./config/dbConnect");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Ping route
const pingRoute = require("./routes/ping");

// Connect to the database
dbConnect();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api", pingRoute);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/sales", saleRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);

// start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
