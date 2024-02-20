import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDb = async () =>{
    try {
        
        // mongoose.set('strictQuery',false)
        const conn = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${mongoose.connection.host}`)

        
    } catch (error) {
        console.error(`MongoDB connection Error : ${error}`);
        throw error;
        
        
    }
}

export default connectDb;