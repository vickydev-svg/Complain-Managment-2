import express from "express";
import Complain from "../models/complain.js";
import mongoose from "mongoose";
const router = express.Router();

// get request
/* he will find the complain by its department or department id */
export const getComplain = async (req,res)=>
{
    try {
        const complains = await Complain.find({department : req.params.department, resolved : false});
        res.status(200).json(complains);
    } catch (error) {
        console.log(error);
    }
}


// get a particular complain with it's id
/** yha problem h ki hum id se kaise dekhe we will manage it later*/
export const findComplain = async (req,res)=>
{
    try {
        const complain = Complain.findOne({_id : req.params.id});
        console.log(complain);
        res.status(200).json(complain);

    } catch (error) {
        console.log(error);
    }
}

// get complain as mentioned above and resolve it.


/*See the resolve component properly */
export const resolveComplain = async (req,res)=>
{
    try {
        const complain = await Complain.findOne({_id : req.params.id});
        /// after finding the complain you have to perform the update and fill the resolve section
        // after that save it to the database and update it as resolved.
        complain.resolve = req.body.resolve;
        complain.resolved = true;
        await complain.save();
        res.status(200).json("resolved");

    } catch (error) {
        console.log(error);
    }
}

// delete the comPlain 

export const deleteComplain= async (req,res)=>
{
    try {
       await Complain.findByIdAndDelete(req.params.id);
       res.json("deleted");
    } catch (error) {
       console.log(error);
    }
}

// history checkup abhi filhaal maine resolved == true kr dia h you can see it 
export const adminHistory = async (req,res)=>
{
    const department = req.params.department;
    console.log(department);
    try {
        const history = await Complain.find({department : department, resolved : true});
        res.status(200).json(history);
    } catch (error) {
        console.log(error);
    }
}







export default router;