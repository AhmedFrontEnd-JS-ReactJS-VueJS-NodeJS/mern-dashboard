import mongoose from "mongoose";


const connectDB = (url)=> {
    mongoose.set('strictQuery',true);
    mongoose.connect(url) 
    .then (() => console.log('Mongo DB connected yahoo'))
    .catch((error)=> console.log(error));
}

export default connectDB;