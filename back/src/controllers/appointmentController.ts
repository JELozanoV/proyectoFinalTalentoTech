import { Request, Response } from 'express';
import IAppointment from '../interface/IAppointment';
import { cancelAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from '../services/appointmentService';
import { Appointments } from '../entities/Appointments';


export const getAppointments = async (req: Request, res: Response) => {
    const appointments:Appointments[] = await getAllAppointmentsService()
    res.status(200).json(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const appointment = await getAppointmentByIdService(Number(id))
        res.status(200).json(appointment);
    } catch (error:any) {
        res.status(400).json({message: error.message})

    }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    const { userId, date, time, description } = req.body;
    try {
        const newAppointment:Appointments = await createAppointmentService({
            userId,
            date,
            time,
            description
        });

        res.status(201).json(newAppointment);
    } catch (error:any) {
        // Manejo de errores
        res.status(400).json({ message: error.message });
    }
};
export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = parseInt(req.params.id);
        if (!appointmentId) {
            return res.status(400).json({ message: "ID de turno no válido" });
        }

        await cancelAppointmentService(appointmentId);
        res.status(200).json({ message: "El turno ha sido cancelado exitosamente" });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
    
