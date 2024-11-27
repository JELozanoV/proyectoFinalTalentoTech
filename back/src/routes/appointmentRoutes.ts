import { Router } from "express";
import { cancelAppointment, getAppointmentById, getAppointments, scheduleAppointment } from "../controllers/appointmentController";
import auth from "../middlewares/auth";



const routerAppointment: Router = Router()


routerAppointment.get("/",getAppointments)
routerAppointment.get("/:id",getAppointmentById)
routerAppointment.post("/schedule",scheduleAppointment)
routerAppointment.put("/cancel/:id",cancelAppointment)





export default routerAppointment