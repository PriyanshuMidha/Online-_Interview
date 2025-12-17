import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import {ENV} from "./lib/env.js";
import { ConnectDB } from "./lib/db.js";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import { inngest, functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/SessionRoute.js";

const app = express();
const PORT = ENV.PORT||3000;

app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use(clerkMiddleware()); // this adds auth field to request object: req.auth() that make access authenticated user


// inngest path 
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- FIX: Correct path to dist ----
const distPath = path.join(__dirname, "../../Frontend/dist");

// Serve static files
app.use(express.static(distPath)); 

// API test route
app.get("/check", (req, res) => {
  req.auth();
  res.json({ message: "backend working" });
});

// SPA fallback for Vite (Express 5)
app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
const StartMyServer=async()=>{
  try{
    await ConnectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
  catch(error){
     console.log("the server is down",error);
  };

}
StartMyServer();