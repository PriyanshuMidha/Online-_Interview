import express from "express";
import { getStreamToken } from "../controller/chatController.js";
import { protectionRoute } from "../middleware/protectionRoute.js";

const router = express.Router();

router.get("/token", protectionRoute, getStreamToken);

export default router;