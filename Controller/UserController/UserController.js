import userModel from "../../Model/UserModel/UserModel.js";
import CryptoJS from 'crypto-js';
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import 'dotenv/config';



const login = async (req, res) => {
    let { email, password } = req.body;
    try {
        const find_user = await userModel.findOne({ Email: email });
       
        if (!find_user) {
            res.status(401).json({ result: false, message: `${email} not exist please register your self` });
            return;

        }

        const bytes = CryptoJS.AES.decrypt(find_user.Password, process.env.crypto_key);
        const decrypted_password = bytes.toString(CryptoJS.enc.Utf8);
        if (password !== decrypted_password) {
            res.status(401).json({ result: false, message: "wrong password" });
            return;
        }
        const payload_jwt = {
            id : find_user._id,
            userName : find_user.Name,
            email : find_user.Email
        }
        const token = jwt.sign(payload_jwt,process.env.JWT_KEY,{expiresIn : "1h"});
        const payload_cookie = {
            
                httpOnly: true,  // Prevents JavaScript access to the cookie (more secure)
                secure: true,    // Ensures the cookie is sent over HTTPS (important for production)
                sameSite: 'strict', // Ensures the cookie is only sent for requests from the same site
                maxAge: 3600  // 1 hour (in milliseconds)
            
        }
        res.status(200).cookie("accessToken",token,payload_cookie).json({result : true,data : {find_user},message : "login successfully"});
    }catch(error)
    {
        res.status(401).json({ result: false, message: error.message });
    }
        


      
   
}

const register = async (req, res) => {
    let { username, email, contact, password } = req.body;
    try {
        const encrypted_password = CryptoJS.AES.encrypt(password, process.env.crypto_key).toString();
        const find_user = await userModel.findOne({ Email: email });
        if (find_user) {
            res.status(402).json({ result: false, message: `${email} already exist` });
            return;
        }
        const new_user = new userModel({ Name: username, Email: email, Contact: contact, Password: encrypted_password })
        const saved_user = await new_user.save();
        res.status(201).json(saved_user);

    } catch (error) {
        res.status(402).json({ result: false, message: error.message });
    }

}

export { register, login };