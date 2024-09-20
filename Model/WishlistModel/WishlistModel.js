import mongoose from "mongoose";

const {Schema,model} = mongoose;

const wishlistSchema = new Schema({
    hotelId : {type : String , require:true}
})

const wishlistModel = model("Wishlist",wishlistSchema);

export default wishlistModel;