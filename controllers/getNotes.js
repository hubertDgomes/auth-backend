import noteSchema from "../models/noteSchema.js"

const getNotes = async (req , res) => {
    if(!req.session.isVerified){
        return res.status(400).json({msg : "Log in first!"})
    }

    const datas = await noteSchema.find({user : req.session.userSchema.id})
    res.json(datas)

}

export default getNotes