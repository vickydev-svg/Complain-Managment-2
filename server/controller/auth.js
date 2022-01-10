import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";
import Student from "../models/student.js";
import dotenv from "dotenv";
// you have to make the secret so be careful here

const router = express.Router();


dotenv.config();
// secret to be generated be careful
const secret = process.env.auth_secret;

// Student Login Check
export const StudentSignin = async (req,res)=>{
    const {rollno,password} = req.body;
    console.log(rollno);
    console.log(password);
    try {
        const existingUser = await Student.findOne({rollno});
        if(!existingUser) return res.status(404).json({message:"Student Doesn't exist"});
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});
        const token = jwt.sign({rollno:existingUser.rollno, id:existingUser._id},secret,{expiresIn : "0.5h"});
        res.status(200).json({result:existingUser, token});
    } catch (error) {
        res.status(500).json({message : "Something went wrong"});
    }
}


// Admin Login Check
export const AdminSignin = async (req,res)=>{
    const {department,password} = req.body;
    try {
        const existingUser = await Admin.findOne({department});
        if(!existingUser) return res.status(404).json({message:"Admin Doesn't exist"});
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});
        const token = jwt.sign({department:existingUser.department, id:existingUser._id},secret,{expiresIn : "0.5h"});
        console.log(existingUser.department);
        res.status(200).json({result:existingUser, token});
    } catch (error) {
        res.status(500).json({message : "Something went wrong"});
    }
}


export default router;