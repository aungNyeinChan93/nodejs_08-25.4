import mongoose from "mongoose";

const mongooseConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log(`Mongoose DB: ${process.env.DB_URL}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}

export default mongooseConnect;