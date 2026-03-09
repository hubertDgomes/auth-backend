import noteSchema from "../models/noteSchema.js"

const notesController = (req , res) => {
    const {notes} = req.body
    if(!notes){
        return res.status(400).json({msg : "Please write down you notes"})
    }


    const notesOfUser = noteSchema({
        user : req.session.userSchema.id,
        notes
    })
    notesOfUser.save()
    res.status(500).json({notes , msg : "The note has been submited!"})

}

export default notesController