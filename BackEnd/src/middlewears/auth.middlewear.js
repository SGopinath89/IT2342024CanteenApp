const authmiddlewear = async(req,res,next)=>{
    const token = true
    if(!token){
        return res.status(400).json({error:"unauthorized"})
    }
    next()
}

module.exports={
    authmiddlewear
}