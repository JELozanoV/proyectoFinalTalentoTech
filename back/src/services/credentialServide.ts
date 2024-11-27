import { AppDataSource } from "../config/data-source";
import { Credentials } from "../entities/Credentials";


// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.



//Interfaces 

interface CreateCredentialDto {
    username: string;
    password: string;
}

interface ValidateCredentialDto {
    username: string;
    password: string;
}

//Repository
const credentialModel = AppDataSource.getRepository(Credentials)

//Funcion de registro
export const createCredential = async (createCredentialDto: CreateCredentialDto): Promise<Credentials> => {
    const newCredential: Credentials =  credentialModel.create(createCredentialDto)
    await credentialModel.save(newCredential)
    return newCredential
}



export const validateCredential = async (validateCredentialDto: ValidateCredentialDto): Promise<Credentials>=>{
    const {username, password} = validateCredentialDto 
    const foundCredential: Credentials | null =  await credentialModel.findOneBy({ username });
    if(!foundCredential) throw Error("Usuario no encontrado")
    if(password !== foundCredential.password) throw Error("Contraseña incorrecta")
    return foundCredential
    
}