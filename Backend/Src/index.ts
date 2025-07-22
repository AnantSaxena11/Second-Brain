import express from "express";
import dotenv from "dotenv";
import { Connection } from "./Config/DBConnection";
import { authRoutes } from "./Routes/authRoutes";

dotenv.config();

const port = parseInt(process.env.PORT || "5000", 10);
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("API is running...");
});

app.use("/api/v1", authRoutes);

const StartServer = async (): Promise<void> => {
    try {
        await Connection();
        console.log("Database connection established.");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

StartServer();
