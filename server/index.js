import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { connect } from 'mongoose';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/',(req,res)=>{
    res.send({message:'hello world'});
})

const startServer=async ()=>{
try {
    connect
} catch (error) {
    console.log(error);
}
}