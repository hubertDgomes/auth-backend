import userSchema from "../models/userSchema.js"

const showUser = async (req, res) => {
    if(!req.session.isVerified){
        return res.status(400).json({msg : "Please Login First!"})
    }

    const user = await userSchema.findById(req.session.userSchema.id)
    res.json(user)

}

export default showUser