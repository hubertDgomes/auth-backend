import express from 'express'
import dbConnector from './config/dbConnector.js';
const app = express();
import routers from './routes/authRoutes.js'
import session from 'express-session';
import cors from 'cors'

app.use(express.json())
app.use(cors())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get("/", (req , res)=>{
    res.send("The server is working!")
})

dbConnector()
app.use("/api" , routers)

app.listen(3000, ()=>{
    console.log("Server is running");
})