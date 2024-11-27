import { Router } from "express";
import auth from "../middlewares/auth";
import { getUserById, getUsers, loginUser, registerUser } from "../controllers/userController";


const routerUser: Router = Router()


routerUser.get("/",getUsers)
routerUser.get('/:id',getUserById)
routerUser.post("/register",registerUser)
routerUser.post("/login",loginUser)



export default routerUser