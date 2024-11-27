import { Request, Response } from "express"
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from "../services/userService";
import { Users } from "../entities/Users";
import { validateCredential } from "../services/credentialServide";



export const getUsers = async (req:Request,res:Response)=>{
    const users :Users[] = await getAllUsersService()
    res.status(200).json(users)
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const user: Users = await getUserByIdService(Number(id))
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const registerUser = async (req: Request, res: Response) => {
    try {
        const {name,email,birthdate,nDni,username,password} = req.body
        const newUser : Users = await createUserService({name,email,birthdate,nDni,username,password})
        res.status(200).json(newUser)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const {username, password} = req.body
    try {
        const credential = await validateCredential({
            username,
            password
        });
        const user = await findUserByCredentialId(credential.id)
        res.status(200).json({login: true,user})
    } catch (error: any) {
        res.status(400).json({message: error.message})

    }
};