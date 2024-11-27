import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./Users"

@Entity({
    name: "appointments"
})

export class Appointments {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string


    @Column({default: "active"})
    status: "active" | "cancelled"

    @Column()
    description: string

    @ManyToOne(()=> Users, (user)=>user.appointments)
    user: Users

}



