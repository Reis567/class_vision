import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { roomRepository } from "../repositories/RoomRepository";
import { videoRepository } from "../repositories/VideoRepository";
import { subjectRepository } from "../repositories/SubjectRepository";
import { NotFoundError } from "../helpers/api-errors";

export class RoomController {
    async create(req:Request,res:Response){
        const{name, description} = req.body


        const newRoom = roomRepository.create({name, description})
        await roomRepository.save(newRoom)
        return res.status(StatusCodes.CREATED).json(newRoom)

    }

    async createVideo(req:Request,res:Response){
        const{title, url} = req.body
        const {idRoom} = req.params

        const room = await roomRepository.findOneBy({id:Number(idRoom)})

        if(!room){
            throw new NotFoundError('Aula não existe')
        }

        const newVideo = videoRepository.create({
                title,
                url,
                room
            })


        await videoRepository.save(newVideo)
        return res.status(StatusCodes.CREATED).json(newVideo)
        

    }

    async roomSubject(req:Request,res:Response){
        const{subject_id} = req.body
        const {idRoom} = req.params


        const room = await roomRepository.findOneBy({id:Number(idRoom)})
        if(!room){
            throw new NotFoundError('Aula não existe')
        }

        const subject = await subjectRepository.findOneBy({id:Number(subject_id)})

        if(!subject){
            throw new NotFoundError('Disciplina não existe ')
        }

        const roomUpdate = {
            ...room,
            subjects:[subject]
        }

        await roomRepository.save(roomUpdate)

        return res.status(StatusCodes.OK).json(room)
    }

    async list(req:Request,res:Response){
        const rooms = await roomRepository.find({
            relations:{
                subjects:true,
                videos:true
            }
        })
        return res.status(StatusCodes.OK).json(rooms)
    }

    async updateById(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description } = req.body;
    
        const room = await roomRepository.findOneBy({ id: Number(id) });
    
        if (!room) {
            throw new NotFoundError('Aula não encontrada');
        }
    
        if (name !== undefined && name !== null) {
            room.name = name;
        }
    
        if (description !== undefined && description !== null) {
            room.description = description;
        }
    
        await roomRepository.save(room);
    
        return res.status(StatusCodes.OK).json(room);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const room = await roomRepository.findOne({
            where:{
                id: Number(id),
            },
            relations:{
                subjects:true,
                videos:true
            }})

        if (!room) {
            throw new NotFoundError('Aula não encontrada');
        }

        return res.status(StatusCodes.OK).json(room);
    }
    async deleteById(req: Request, res: Response) {
        const { id } = req.params;

        const room = await roomRepository.findOneBy({ id: Number(id) });

        if (!room) {
            throw new NotFoundError('Aula não encontrada');
        }

        await roomRepository.remove(room);

        return res.status(StatusCodes.NO_CONTENT).send();
    }
    
}