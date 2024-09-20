import jwt from "jsonwebtoken"
const verifyUser = (req,res,next)=>{
        
         try{const token  = req.cookies.accessToken;
         const user = jwt.verify(token,process.env.JWT_KEY);
         if(!user)
         {
            res.send({result : "user not vrify"});
            return;
         }
         req.user = user;
         next();}catch(error)
         {
            res.send({"error":error.message})
         }
}


export default verifyUser;