import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { roomRepository } from "../repositories/RoomRepository";
import { videoRepository } from "../repositories/VideoRepository";
import { subjectRepository } from "../repositories/SubjectRepository";

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
            return res.status(StatusCodes.NOT_FOUND).json({message:'Aula não existe'})
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
            return res.status(StatusCodes.NOT_FOUND).json({message:'Aula não existe'})
        }

        const subject = await subjectRepository.findOneBy({id:Number(subject_id)})

        if(!subject){
            return res.status(StatusCodes.NOT_FOUND).json({message:'Disciplina não existe'})
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
}