import { DataSource } from "typeorm"
import { Users } from "../entities/Users"
import { Appointments } from "../entities/Appointments"
import { Credentials } from "../entities/Credentials"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    dropSchema: true,
    logging: ["error"],
    entities: [Users, Appointments, Credentials],
    subscribers: [],
    migrations: [],
})