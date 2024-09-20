import mongoose from "mongoose";

const {Schema,model} = mongoose;

const hotelCategoryScema = new Schema({
    category : {type : String , require : true}
})

const hotelCategoryModel = model("category",hotelCategoryScema);

export default hotelCategoryModel;