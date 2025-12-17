import {StreamChat} from 'stream-chat';
import dotenv from 'dotenv';
dotenv.config();

const apiKey=process.env.STREA_API_KEY;
const apiSecret=process.env.STREA_API_SECRET;

if(!apiKey || !apiSecret){
    throw new Error("Stream API key and secret must be defined in environment variables");
}




export const streamClient=StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async(userData)=>{
    try{
        await streamClient.upsertUsers ([userData]);
        return userData; 
    }  
    catch(err){
        console.error("Error generating stream token:",err);
        throw err;
    }
}  

const generateStreamToken = (userId) => {
    try{
        const token=streamClient.createToken(userId);
        return token;
    }
    catch(err){
        console.error("Error generating stream token:",err);
        throw err;
    }
} 

export {generateStreamToken};