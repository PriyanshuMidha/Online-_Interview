
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";


 export async function registerController(req,res){
    const {fullName,email,password}=req.body;
    try{
        //validation
        if(!fullName || !email || !password){
            return res.status(400).send({message:"Please fill all the fields"})
        }
        if(password.length<6){
            return res.status(400).send({message:"Password must be at least 6 characters"})
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        //check if user already exists
        //hash password
        //save user to db

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).send({message:"User already exists"})
        }
         const idx = Math.floor(Math.random() * 100) + 1; // generate a num between 1-100
         const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;
         const newUser = await User.create({
                fullName,
                email,
                password, 
                profilePic: randomAvatar,
                });

                try {
                    await upsertStreamUser({
                    id: newUser._id.toString(),
                    name: newUser.fullName,
                    email: newUser.email,
                    image: newUser.profilePic||"",
                })
                console.log("Stream user upserted successfully for user ID:", newUser._id.toString() );
                
            } catch (err) {
                console.error("Error upserting Stream user:", err);
            }

          const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'7d'})
          res.cookie("token",token,{
            maxAge:7*24*60*60*1000, //7 days
            httpOnly:true,//prevent attack
            sameSite:"strict",
            secure:process.env.NODE_ENV==="production",//prevent https only in production
          });
          newUser.password=undefined; //hide password
          res.status(201).send({
            success:true,
            message:"User registered successfully",
            user:newUser,
          })

    }catch(err){
        console.log("Error in signup ",err);
        return res.status(500).json({message:"Internal Server Error"})
    }
}
//login
export async function loginController(req, res) {
    
   try
    {
        const { email, password } = req.body;
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        // Compare passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        // Set cookie
        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        user.password = undefined; // Hide password
        res.status(200).json({
            success: true,
            message: "Login successful",
            user,
        });
    } 
    catch (err) 
    {
        console.error("Error in login:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

//logout
export async function logoutController(req, res) {
    res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({
        success: true,
        message: "Logout successful",
    });
}
