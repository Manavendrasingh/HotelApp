import express from 'express'
import { hotelData,hotelCategoryData } from "../../Controller/AdminController/importHotelDataAdmin.js";

const dataRoute = express.Router();

dataRoute.post("/data",hotelData)
         .post("/category",hotelCategoryData)

export default dataRoute;
