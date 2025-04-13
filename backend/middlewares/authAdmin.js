import jwt from 'jsonwebtoken'

const authAdmin = (req, res, next) => {
  try{

const atoken = req.headers["authorization"]
if(!atoken){
    return res.json({success:false,message:"Token not found"})
}
const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
    return res.json({success:false,message:"Invalid token"})


}

next()
  }catch(error){
console.log(error)
    res.json({success:false,message:"Internal server error"})

  }
}

export default authAdmin