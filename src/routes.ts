import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControllers";
import { RoomController } from "./controllers/RoomController";
import { ApiError ,BadRequestError} from "./helpers/api-errors";
import { StatusCodes } from "http-status-codes";

export const routes = Router()

routes.get('/',(req, res)=>{
    res.send('Bem vindo a API')
})

routes.post('/subject', new SubjectController().create)


//Room routes

//GetAll
routes.get('/room', new RoomController().list)
//Create
routes.post('/room', new RoomController().create)
// Update by id
routes.put('/room/:id', new RoomController().updateById);
// Get by ID
routes.get('/room/:id', new RoomController().getById);
// Delete by ID
routes.get('/room/:id', new RoomController().deleteById);

//Room relations routes
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)