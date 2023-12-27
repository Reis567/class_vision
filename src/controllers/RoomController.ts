import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { roomRepository } from "../repositories/RoomRepository";
import { videoRepository } from "../repositories/VideoRepository";

export class RoomController {
    async create(req:Request,res:Response){
        const{name, description} = req.body

        try {
            const newRoom = roomRepository.create({name, description})
            await roomRepository.save(newRoom)
            return res.status(StatusCodes.CREATED).json(newRoom)
            
        } catch (error) {
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message:'Internal server error'
            })
        }

    }

    async createVideo(req:Request,res:Response){
        const{title, url} = req.body
        const {idRoom} = req.params

        try {
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
            
        } catch (error) {
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message:'Internal server error'
            })
        }

    }
}