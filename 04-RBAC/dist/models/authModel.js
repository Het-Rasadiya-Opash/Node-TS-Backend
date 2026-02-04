import mongoose, { Document, Model, Schema } from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "Manager", "User"],
    },
});
export const userModel = mongoose.model("user", userSchema);
//# sourceMappingURL=authModel.js.map