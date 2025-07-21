import {Router} from "express";
import { Auth } from "../Middlewares/Auth";
export const authRoutes : Router = Router();
authRoutes.post('/signin', signin);
authRoutes.post('signup', Auth, signup);