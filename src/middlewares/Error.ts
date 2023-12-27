import express, { NextFunction ,Request,Response} from 'express';

export const ErrorMiddleware = (error:Error, req:Request, res:Response, next:NextFunction)=>{
    console.log(error)
    return res.json('Middleware')

  }