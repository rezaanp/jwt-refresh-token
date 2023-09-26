import express from "express";
import authRouter from "../route/auth-route.js";

const web = express();
web.use(express.json()).use(authRouter);

export default web;
