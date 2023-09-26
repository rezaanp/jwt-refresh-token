import express from "express";
import authController from "../controller/auth-controller.js";

const authRouter = new express.Router();
authRouter.post("/login", authController.login);
authRouter.post("/token", authController.refresh);

export default authRouter;
