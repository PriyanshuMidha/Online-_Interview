import express from "express";
import { protectionRoute } from "../middleware/protectionRoute.js";
import {
  createSession,
  endSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
} from "../controller/sessionController.js";

const router = express.Router();

router.post("/", protectionRoute, createSession);
router.get("/active", protectionRoute, getActiveSessions);
router.get("/my-recent", protectionRoute, getMyRecentSessions);

router.get("/:id", protectionRoute, getSessionById);
router.post("/:id/join", protectionRoute, joinSession);
router.post("/:id/end", protectionRoute, endSession);

export default router;