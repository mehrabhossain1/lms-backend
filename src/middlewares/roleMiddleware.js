// middlewares/roleMiddleware.js
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res
                .status(403)
                .json({ message: "Forbidden: role not allowed" });
        }
        next();
    };
};

module.exports = authorizeRoles;
