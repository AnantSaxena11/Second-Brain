import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Connection } from "./Config/DBConnection";
dotenv.config();

const port = process.env.PORT;

const app = express();

const StartServer  = async () : Promise<void> =>{
    try {
        Connection()
        console.log("The Connection was established successfully")
    } catch (error) {
        console.error(error)
    }
}
StartServer()
app.listen(port, (): void => {
    console.log(`The server is running at the port ${port}`)
})
