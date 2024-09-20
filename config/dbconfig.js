import mongoose from "mongoose";
import 'dotenv/config'

const dbConnect = async()=>{

         try{
             await mongoose.connect(process.env.DATABASE_URI);
         }catch(err){
            console.log("db not connected successfully",err.message);
         }

}
export default dbConnect;