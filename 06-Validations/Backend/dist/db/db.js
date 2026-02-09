import mongoose from "mongoose";
export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log(`DB Connected....`);
    }
    catch (error) {
        console.log(`DB Error ${error}`);
    }
};
//# sourceMappingURL=db.js.map