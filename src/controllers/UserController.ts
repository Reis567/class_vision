import { BadRequestError } from "../helpers/api-errors";
import { userRepository } from "../repositories/UserRepository"
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { StatusCodes } from "http-status-codes";


export class UserController {
    async create(req: Request, res: Response){
        const { name, email, password } = req.body;

        const userExists = await userRepository.findOneBy({email})
        if(userExists){
            throw new BadRequestError('Email já cadastrado , tente outro')
        }
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            name:name,
            email:email,
            password:hashPassword            
        })
        await userRepository.save(newUser)

        const {password:_, ...user} = newUser

        return res.status(StatusCodes.CREATED).json(user)

    }
}