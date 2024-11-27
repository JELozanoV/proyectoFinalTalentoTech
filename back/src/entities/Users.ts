import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Credentials } from "./Credentials"
import { Appointments } from "./Appointments"

@Entity({
    name: "users"
})
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:100
    })
    name: string // VARCHAR 100

    @Column({ unique: true })
    email: string

    @Column()
    birthdate : Date

    @Column()
    nDni: string

    @OneToOne(()=> Credentials)
    @JoinColumn()
    credential: Credentials

    @OneToMany(()=> Appointments, (appointment)=>appointment.user)
    appointments: Appointments[]

}
