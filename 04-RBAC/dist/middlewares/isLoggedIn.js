import jwt from "jsonwebtoken";
const isLoggedIn = (req, res, next) => {
    const token = req.cookies.token;
    if (!token || token === "") {
        return res.status(401).json({ message: "No Token, authorization Denied" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT);
        console.log(data);
        req.user = data;
        next();
    }
    catch (error) { }
};
export default isLoggedIn;
//# sourceMappingURL=isLoggedIn.js.map