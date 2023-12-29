import { BadRequestError, UnauthoraError } from "../helpers/api-errors";
import { userRepository } from "../repositories/UserRepository"
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken'


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

    async login(req: Request, res: Response){

        const { email, password } = req.body;

        const user = await userRepository.findOneBy({email})

        if(!user){
            throw new BadRequestError('Email ou senha incorretos !')
        }
        const verifyPass = await bcrypt.compare(password , user.password)

        if(!verifyPass){
            throw new BadRequestError('Email ou senha incorretos !')
        }

        const token = jwt.sign({id:user.id}, process.env.JWT_PASS ?? 'jwt_pass', {expiresIn:'8h'})

        const {password:_, ...userLogin} = user

        return res.status(StatusCodes.OK).json({user:userLogin,token:token})
    }
}