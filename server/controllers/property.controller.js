import mongoose from "mongoose";
import propertyModel from "../mongodb/models/property.js";
import User from '../mongodb/models/user.js' ;
import  * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});


const getAllproperties =async(req,res)=>{

};

const getAllpropertydetails =async (req,res)=>{

};

const createProperty = async (res,req)=>{
        const {title,description,propertyType,location,price,photo,email} =req.body;

        const session= await mongoose.startSession();
        session.startTransaction();
        const user= await User.findOne({email}).session(session);

        if(!user){ throw new Error('User not Found! '); }

        const photoUrl = await cloudinary.uploader.upload(photo);
};

const updateProperty = async (res,req)=>{

};

const deleteProperty =async (req,res)=>{

};


export {
    getAllproperties,
    getAllpropertydetails,
    createProperty,
    updateProperty,
    deleteProperty,
    
};