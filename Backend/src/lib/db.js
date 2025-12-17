import mongoose from "mongoose";
import { ENV } from "./env.js";

export const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_DB);
    console.log("Connected to DB:", conn.connection.host);
  } catch (error) {
    console.log("Error in connecting:", error.message);
    process.exit(1); // 1 = failure
  }
};
