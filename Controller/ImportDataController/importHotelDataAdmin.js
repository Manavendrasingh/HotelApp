import hotelModel from "../../Model/HotelModel/Hotel.Model.js";
import hotelCategoryModel from "../../Model/HotelCategory.Model.js";
import categories from "../../Data/Cetagory.js"
import hotels from "../../Data/Hotel.js";

const hotelData = async(req,res)=>{
    try{ 
        await hotelModel.deleteMany({});
        const hotelDateInDB = await hotelModel.insertMany(hotels.data);
        res.json(hotelDateInDB);
    }catch(err)
    {
        console.log(err);
        res.json({"message" : "data is not inserted in db "});
    }
}

const hotelCategoryData = async(req,res)=>{
    try{ 
         await hotelCategoryModel.deleteMany();
         const categoryDataInDB = await hotelCategoryModel.insertMany(categories.data);
         res.json(categoryDataInDB);
    }catch(err)
    {
        console.log(err)
        res.json({"message" : "category data is not loaded in DB"});
    }

}
 

export {hotelData,hotelCategoryData};