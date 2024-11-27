/* export enum appointmentStatus  {
    ACTIVE = "active",
    CANCELED = "cancelled"
} */

interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: "active" | "cancelled";
    description: string
}

export default IAppointment