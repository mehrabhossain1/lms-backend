const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const { getAllStudents } = require("../controllers/adminController");

router.get("/students", verifyToken, authorizeRoles("admin"), getAllStudents);

module.exports = router;
