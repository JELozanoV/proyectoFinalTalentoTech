import { AppDataSource } from "../config/data-source";
import { Appointments } from "../entities/Appointments";
import { Users } from "../entities/Users";

//INTERFACES 

interface createAppointmentDto {
  
  date: string;
  time: string;
  userId: number;
  description: string
}

//REPOSITORIOS   

  const appointmentModel = AppDataSource.getRepository(Appointments)

  const userModel = AppDataSource.getRepository(Users)

export const getAllAppointmentsService = async ():Promise<Appointments[]> => {
  const allAppointment: Appointments[] = await appointmentModel.find({
    relations:{user: true}
  })
  return allAppointment
};

export const getAppointmentByIdService = async (id: number): Promise<Appointments | null> => {
  const foundAppointment: Appointments | null = await appointmentModel.findOne({
    where: {id}, relations: ["user"]
  })
  if (!foundAppointment) throw new Error("Turno no encontrado");
  return foundAppointment;
};

export const createAppointmentService = async (createAppointmentDto: createAppointmentDto): Promise<Appointments> => {
  try {
      const newAppointment : Appointments = appointmentModel.create(createAppointmentDto);
      const user : Users | null = await userModel.findOneBy({
        id: createAppointmentDto.userId
      })

      if (!user) throw Error("Usuario no existe")
      newAppointment.user = user

      await appointmentModel.save(newAppointment);
      return newAppointment;
  } catch (error: any) {
      throw new Error("Error al crear el turno: " + error.message);
  }
};

export const cancelAppointmentService = async (id: number): Promise<void> => {
  try {
      const appointment = await appointmentModel.findOneBy({id});
      if (!appointment) {
          throw new Error("Turno no encontrado");
      }
      appointment.status = "cancelled";
      await appointmentModel.save(appointment); // Esperar a que la operación de save se complete
  } catch (error:any) {
      throw new Error("Error al cancelar el turno: " + error.message);
  }
};



