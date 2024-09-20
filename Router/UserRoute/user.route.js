import express from 'express'
import { register,login } from '../../Controller/UserController/UserController.js';

const userRouter = express.Router();

userRouter.post("/register",register)
          .post("/login",login)






export default userRouter