import { AppDataSource } from "../config/data-source";
import { Credentials } from "../entities/Credentials";
import { Users } from "../entities/Users";
import { createCredential } from "./credentialServide";


//interfaces
interface createUserDto {
  name: string;
  email: string;
  birthdate: string;
  nDni: string;
  username: string;
  password: string;
}
//repositorio
const userModel = AppDataSource.getRepository(Users)

//servicios


export const getAllUsersService = async ():Promise<Users[]> => {
  const allUsers: Users[] = await userModel.find({
    relations:{appointments: true}
  })
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<Users> => {
  const foundUser: Users | null = await userModel.findOne({
    where: {id}, relations: ["appointments"]
  })
  if (!foundUser) throw Error("Usuario no encontrado")
  return foundUser
};


export const createUserService = async (createUserDto: createUserDto): Promise<Users> => {
    const newUser: Users = userModel.create(createUserDto);
    const newCredential: Credentials = await createCredential({
      username: createUserDto.username,
      password: createUserDto.password
    });
    await userModel.save(newUser);
    newUser.credential = newCredential;
    await userModel.save(newUser);

    return newUser;
}

export const findUserByCredentialId = async (credentialId : number):Promise<Users | null >=>{
  const foundUser: Users |null = await userModel.findOneBy({ 
    credential: {id: credentialId}
  });
  return foundUser
}