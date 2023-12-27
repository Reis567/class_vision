import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControllers";

export const routes = Router()

routes.post('/subject', new SubjectController().create)