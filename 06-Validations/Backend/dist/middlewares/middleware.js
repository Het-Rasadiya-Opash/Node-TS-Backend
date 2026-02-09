export const errorHandler = (err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).json({ message });
};
//# sourceMappingURL=middleware.js.map