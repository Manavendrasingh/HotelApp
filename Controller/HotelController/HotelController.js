import hotelModel from "../../Model/HotelModel/Hotel.Model.js";


const  hotels_info = async(req,res)=>{
    const category = req.query.category;
    
  try{ 
    if(category)
        {
            const data = await hotelModel.find({category : category});
            res.json(data);
        } 
    else {
            const data = await hotelModel.find({});
            res.json(data);
         }
   }catch(err){
    console.log(err);
    res.json({"message": "data fetching issue in from mongoDB"});
   }
}

const singleHotel_info = async(req,res)=>{
    const {id} = req.params;
    try{
        const hotelFoundByID = await hotelModel.findById(id);
        if(hotelFoundByID)
        {
            res.status(200).json(hotelFoundByID);
        }
        
    }catch(error)
    {
        console.log(error)
        res.status(404).json({"message": "no hotel found"});
    }
}

export {hotels_info,singleHotel_info};