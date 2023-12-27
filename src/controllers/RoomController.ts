import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class RoomController {
    async create(req:Request,res:Response){
        const{name, description} = req.body

        try {
            
        } catch (error) {
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message:'Internal server error'
            })
        }

    }
}