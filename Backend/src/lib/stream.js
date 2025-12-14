import {StreamChat} from 'stream-chat';
import dotenv from 'dotenv';
dotenv.config();

const apiKey=process.env.STREA_API_KEY;
const apiSecret=process.env.STREA_API_SECRET;

if(!apiKey || !apiSecret){
    throw new Error("Stream API key and secret must be defined in environment variables");
}

export const streamClient=StreamChat.getInstance(apiKey,apiSecret);