import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControllers";
import { RoomController } from "./controllers/RoomController";
import { ApiError ,BadRequestError} from "./helpers/api-errors";
import { StatusCodes } from "http-status-codes";
import { UserController } from "./controllers/UserController";

export const routes = Router()

routes.get('/',(req, res)=>{
    res.send('Bem vindo a API')
})

//User routes

//Create
routes.post('/user', new UserController().create)
//Login 
routes.post('/login',new UserController().login)
//Login 
routes.get('/profile',new UserController().getProfile)


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
routes.delete('/room/:id', new RoomController().deleteById);



//Subject routes
//Create
routes.post('/subject', new SubjectController().create)
//GetAll
routes.get('/subject', new SubjectController().getAll)
// Update by id
routes.put('/subject/:id', new SubjectController().updateById);
// Delete by ID
routes.delete('/subject/:id', new SubjectController().deleteById);
// Get by ID
routes.get('/subject/:id', new SubjectController().getById);







//Room relations routes
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)