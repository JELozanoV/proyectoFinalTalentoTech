import express from "express"
import cors from "cors"
import morgan from "morgan"
import routerUser from "./routes/userRoutes"
import routerAppointment from "./routes/appointmentRoutes"

const app = express()

//Middlewares 
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


app.use("/users",routerUser)
app.use("/appointments",routerAppointment)

export default app