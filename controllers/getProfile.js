import profileSchema from "../models/profileSchema.js"

const getProfile = async (req , res) => {
    try{
        const profile = await profileSchema.findOne({user : req.session.userSchema.id}).populate("user")
        if(!profile){
            return res.json({msg : "Profile not found"})
        }
        res.json(profile)
    }
    catch(err){
        res.status(500).json({ msg: "Server error" });
    }
}

export default getProfile