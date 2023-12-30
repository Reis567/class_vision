import jwt  from 'jsonwebtoken';
import { Request, Response , NextFunction } from "express"
import { UnauthoraError } from '../helpers/api-errors';
import { userRepository } from '../repositories/UserRepository';
import { StatusCodes } from 'http-status-codes';

type JwtPayload = {
    id:number
}

export const AuthMiddleware = async (req:Request , res:Response, next:NextFunction)=>{
    const {authorization} = req.headers

    if(!authorization){
        throw new UnauthoraError('Não autorizado')
    }

    const token = authorization.split(' ')[1]
    const {id} = jwt.verify(token , process.env.JWT_PASS??'JWT_PASS') as JwtPayload


    const user = await userRepository.findOneBy({id})

    if(!user){
        throw new UnauthoraError('Não autorizado')
    }

    const {password:_, ...userVerified} = user

    req.user = user
    next()
}