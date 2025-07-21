import {User} from "../Models/UserSchema"
import {z} from "zod";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const signUpSchema = z.object({
    username : z.string().min(8,{message : "Username must be of length 8"}).max(10,{message : "UserName max length should be less than or equal to 10"}),

})

const SignUp = async () =>{

}