import express from 'express'
import dbConnector from './config/dbConnector.js';
const app = express();
import routers from './routes/authRoutes.js'
import session from 'express-session';
import cors from 'cors'
import 'dotenv/config'
import MongoStore from "connect-mongo"


app.use(express.json())
app.use(cors({
    origin : "https://auth-client-drab.vercel.app",
    credentials : true
}))

const PORT = process.env.PORT || 3000

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO
  }),
  cookie: {
    secure: true,
    sameSite: "none"
  }
}))

app.get("/", (req , res)=>{
    res.send("The server is working!")
})

dbConnector()
app.use("/api" , routers)

app.listen(PORT, ()=>{
    console.log("Server is running");
})