import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
export const isLoggedIn = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "You must be logged in" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
//# sourceMappingURL=isLoogedIn.js.map