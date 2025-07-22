import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const Connection = async (): Promise<void> => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) throw new Error("MONGO_URL is not defined in .env");

        // Optional: Mongoose event listeners
        mongoose.connection.on("connected", () => {
            console.log("✅ MongoDB connected successfully");
        });
        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err);
        });
        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB disconnected");
        });

        await mongoose.connect(mongoUrl);

        // Optional: readyState check
        if (mongoose.connection.readyState === 1) {
            console.log("✅ Mongoose reports connection is established.");
        }

    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
        throw new Error("Cannot connect to MongoDB");
    }
};
