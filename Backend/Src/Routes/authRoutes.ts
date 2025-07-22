import {Router} from "express";
import {SignUp} from "../Controllers/authControllers"
export const authRoutes : Router = Router();
authRoutes.post('/signup',SignUp);
console.log("✅ authRoutes loaded");

authRoutes.get('/test', (req, res) => {
  console.log("✅ /test route hit");
  res.send("Test route is working");
});
