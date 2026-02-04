import mongoose from 'mongoose';
export const dbConnect = () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/Node-Ts')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.error('MongoDB connection error:', err));
};
//# sourceMappingURL=db.js.map