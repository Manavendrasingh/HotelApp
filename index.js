import express from 'express'
import hotelRouter from './Router/HotelRoute/hotel.router.js';
import 'dotenv/config'
import dbConnect from './config/dbconfig.js';
import mongoose from 'mongoose';
import dataRoute from './Router/AdminRoute/importDataAdmin.route.js';
import userRouter from './Router/UserRoute/user.route.js';
import cookieParser from 'cookie-parser';
import wishlistRouter from './Router/WishlistRoute/WishlistRoute.js';
import verifyUser from './Middleware/VerifyUser/VerifyUser.js';

const appServer = express();

appServer.use(express.json());
appServer.use(cookieParser());

appServer.use("/api/hotels/user",userRouter);// http://localhost:3000/api/hotels/user/register
appServer.use("/api/hotels",verifyUser,hotelRouter); //http://localhost:3000/api/hotels // //http://localhost:3000/api/hotels?category =  .... ,//http://localhost:3000/api/hotels/id 
appServer.use("/api/hotels",verifyUser ,dataRoute); //http://localhost:3000/api/hotels/data //http://localhost:3000/api/hotels/category  these are for developer use only or admin
// appServer.use("/api/hotels/user",userRouter); // http://localhost:3000/api/hotels/user/register
appServer.use("/api/hotels/user/wishlist",verifyUser,wishlistRouter); // http://localhost:3000/api/hotels/user/wishlist





dbConnect()
mongoose.connection.on("open",()=>{
        console.log("db connecte successfully");
        appServer.listen(process.env.PORT,()=>{
        console.log(`server is  up  and running at localhost:${process.env.PORT}`);
        })
   
    
})   


    






