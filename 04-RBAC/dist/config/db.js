import mongoose from "mongoose";
export const dbConnect = () => {
    mongoose
        .connect(process.env.DB)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.error("MongoDB connection error:", err));
};
//# sourceMappingURL=db.js.map