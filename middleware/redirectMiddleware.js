const redirectMiddleware = (req, res, next) =>{
    if(!req.session.isVerified){
        return res.status(400).json({msg : "Please login to continue!"})
    }
    next()
}

export default redirectMiddleware