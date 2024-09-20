import wishlistModel from "../../Model/WishlistModel/WishlistModel.js";

const addWishlist = async(req,res)=>{

    const {id} = req.params;
    console.log(id)
    try{
        const user_wishlist = new wishlistModel({hotelId : id});
        const saved_user_wishlist = await user_wishlist.save();
        res.status(201).json(saved_user_wishlist);
    }catch(error){
        res.status(402).json({result:false,message : error.message});
    }
}

export {addWishlist};