import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const Connection = async () : Promise<void> =>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
    } catch (error) {
        throw new Error("Cannot connect to the Database due to this error");
    }
}