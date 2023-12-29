import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { subjectRepository } from "../repositories/SubjectRepository"
import { BadRequestError, NotFoundError } from "../helpers/api-errors"


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
    async updateById(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) {
            throw new BadRequestError('O nome é obrigatório!');
        }

        const subject = await subjectRepository.findOneBy({ id: Number(id) });

        if (!subject) {
            throw new NotFoundError('Disciplina não encontrada');
        }

        subject.name = name;
        await subjectRepository.save(subject);

        return res.status(StatusCodes.OK).json(subject);
    }
}