import mongoose from "mongoose";
import 'dotenv/config'

const dbConnector = () =>{
    mongoose.connect(process.env.MONGO)
    .then(()=> console.log("DB is connected!"))
}

export default dbConnector;