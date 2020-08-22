const jwt = require('../common/utils/jwt')
const User = require('../common/models/user')
module.exports =  (role)=>{
   return async function(req,res,next){
    if(req.headers['authorization'] && req.headers['authorization'] !== "undefined"){
        var token = req.headers['authorization']
        try{
            var decode = jwt.verifyToken(token)
            var UserExist = await User.findOne({_id:decode.id,role:decode.role},{_id:1,role:1})
            if( UserExist && (role == "*" && [0,1,2,3,4,5].includes(UserExist.role) || UserExist.role == role)){
                req.token = decode
                next()
            }else{
                return res.status(401).json({error:"Utilisateur non autorisé!"});
            }
        }catch(err){
            return res.status(400).json({error:err.message,expire:true,name:"JsonWebTokenError"})
        }
    }else{
        res.status(401).json({error:"Utilisateur non autorisé!"});
    }
   }
}