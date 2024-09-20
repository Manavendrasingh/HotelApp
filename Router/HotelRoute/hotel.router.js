import express from 'express';
import hotelModel from '../../Model/HotelModel/Hotel.Model.js';
import { hotels_info, singleHotel_info} from '../../Controller/HotelController/HotelController.js';
import verifyUser from '../../Middleware/VerifyUser/VerifyUser.js';

const hotelRouter = express.Router();

hotelRouter.get("/",hotels_info)
           .get("/:id",singleHotel_info);


export default hotelRouter;