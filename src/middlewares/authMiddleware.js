// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];

        if (!token) {
            return res
                .status(401)
                .json({ message: "Unauthorized: token missing" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // Optional: log in dev only
            if (process.env.NODE_ENV === "development") {
                console.log("✅ Token verified:", req.user);
            }

            next();
        } catch (err) {
            return res.status(401).json({
                message: "Unauthorized: invalid token",
                error: err.message,
            });
        }
    } else {
        return res
            .status(401)
            .json({ message: "Unauthorized: token not provided" });
    }
};

module.exports = verifyToken;
