import {Router} from "express";

export const authRoutes : Router = Router();
authRoutes.post('/signin', signin);
authRoutes.post('signup', signup);