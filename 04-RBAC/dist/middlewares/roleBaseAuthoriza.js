const roleBasedAuthorize = (...roles) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !roles.includes(user.role)) {
            return res.status(403).json({ message: "Access Denied" });
        }
        next();
    };
};
export default roleBasedAuthorize;
//# sourceMappingURL=roleBaseAuthoriza.js.map