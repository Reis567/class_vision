import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { subjectRepository } from "../repositories/SubjectRepository"
import { BadRequestError } from "../helpers/api-errors"


export class SubjectController {
    async create(req:Request,res:Response){
        const{name}= req.body

        if(!name){
            throw new BadRequestError('o nome é obrigatório !')
        }
        const newSubject = subjectRepository.create({name})
        await subjectRepository.save(newSubject)
        return res.status(StatusCodes.CREATED).json(newSubject)
    }
}