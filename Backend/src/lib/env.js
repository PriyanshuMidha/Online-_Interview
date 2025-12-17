import dotenv from "dotenv";

dotenv.config();

export const ENV={
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    MONGO_URL:process.env.MONGO_URL,
    STREAM_API_KEY:process.env.STREA_API_KEY,
    STREAM_API_SECRET:process.env.STREA_API_SECRET,
    JWT_SECRET_KEY:process.env.JWT_SECRET

}
