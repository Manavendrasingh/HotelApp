import express from 'express'
import { addWishlist } from '../../Controller/WishlistController/WishlistController.js';

const wishlistRouter = express.Router();

wishlistRouter.post("/:id",addWishlist);

export default wishlistRouter;