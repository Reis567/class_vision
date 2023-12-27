import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"


export class SubjectController {
    async create(req:Request,res:Response){
        const{name}= req.body

        if(!name){
            return res.status(StatusCodes.BAD_REQUEST).json({mensagem:'o nome é obrigatório !'})
        }
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({mensagem:"Internal server error"})
        }
    }
}