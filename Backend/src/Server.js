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
const PORT = process.env.PORT||3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// ---- FIX: Correct path to dist ----
const distPath = path.join(__dirname, "../../Frontend/dist");

// Serve static files
app.use(express.static(distPath));

// API test route
app.get("/health", (req, res) => {
  res.json({ message: "backend working" });
});

app.use("/api/auth", authRoute);

// SPA fallback for Vite (Express 5)
// app.use((req, res) => {
//   res.sendFile(path.join(distPath, "index.html"));
// });


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
