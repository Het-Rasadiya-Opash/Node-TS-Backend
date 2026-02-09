import mongoose, { Schema, Document, Model } from "mongoose";
export const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
});
export const userModel = mongoose.model("user", userSchema);
//# sourceMappingURL=user.js.map