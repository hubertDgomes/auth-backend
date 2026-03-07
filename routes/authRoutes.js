import express from 'express'
import signupControllers from '../controllers/signupControllers.js'
import otpControllers from '../controllers/otpControllers.js'
import loginController from '../controllers/loginController.js'
import redirectMiddleware from '../middleware/redirectMiddleware.js'
import dashboard from '../controllers/dashboard.js'
import logout from '../controllers/logout.js'
import createProfile from '../controllers/createProfile.js'
import getProfile from '../controllers/getProfile.js'
import showUser from '../controllers/showUser.js'
const router = express.Router()

router.post("/signup" , signupControllers)
router.post("/otp" , otpControllers)
router.post("/login", loginController)
router.get("/logout", logout)
router.get("/showuser" , showUser)
router.post("/profile" , createProfile)
router.get("/getprofile" , getProfile)
router.get("/dashboard" , redirectMiddleware , dashboard)


export default router