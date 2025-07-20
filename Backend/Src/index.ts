import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Connection } from "./Config/DBConnection";
import { contentRoutes } from "./Routes/contentRoutes";
import { authRoutes } from "./Routes/authRoutes";
import { brainRoutes } from "./Routes/brainRoutes";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

//Define all your Routes

app.use('/api/v1',authRoutes);
app.use('/api/v1/content',contentRoutes);
app.use('/api/v1/brain',brainRoutes);

const StartServer = async (): Promise<void> => {
    try {
        await Connection()
        console.log("The Connection was established successfully")
        app.listen(port, (): void => {
            console.log(`The server is running at the port ${port}`)
        })
    } catch (error) {
        console.error(error)
    }
}
StartServer()
