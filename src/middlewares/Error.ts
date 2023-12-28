import express, { NextFunction ,Request,Response} from 'express';
import { ApiError } from '../helpers/api-errors';

export const ErrorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Erro interno do servidor';

  
  console.error(`Error: ${statusCode} - ${message}`, { error, request: req });

  res.status(statusCode)
      .json({ message })
      .header('Content-Type', 'application/json')
      .header('X-Content-Type-Options', 'nosniff');
};
