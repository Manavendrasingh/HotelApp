import mongoose from "mongoose";

const {Schema ,model} = mongoose;

const userSchema = new Schema({
    Name : {type : String },
    Email : {type : String , required : true, unique : true},
    Password : {type : String , require :true },
    Contact : {type : Number }
})

const userModel = model("HotelUser",userSchema);

export default userModel;