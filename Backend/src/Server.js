import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT||3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// ---- FIX: Correct path to dist ----
const distPath = path.join(__dirname, "../../Frontend/dist");

// Serve static files
app.use(express.static(distPath));

// API test route
app.get("/health", (req, res) => {
  res.json({ message: "backend working" });
});

// SPA fallback for Vite (Express 5)
app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
