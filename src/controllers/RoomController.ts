import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { roomRepository } from "../repositories/RoomRepository";

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
}