import express, {Router} from "express"
import AuthController from "../controllers/auth.controller"

const router: Router= express.Router()
const authController = new AuthController()

router.get("/signup", authController.signIn)