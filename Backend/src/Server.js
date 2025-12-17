import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import authRoute from "./routes/route.auth.js"; 
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";  

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 MIDDLEWARE (ORDER MATTERS)
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Serve frontend build
const distPath = path.join(__dirname, "../../Frontend/dist");
app.use(express.static(distPath));

// Health check
app.get("/health", (req, res) => {
  res.json({ message: "backend working" });
});

// Routes
app.use("/api/auth", authRoute);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
