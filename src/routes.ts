import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControllers";
import { RoomController } from "./controllers/RoomController";
import { ApiError ,BadRequestError} from "./helpers/api-errors";
import { StatusCodes } from "http-status-codes";
import { UserController } from "./controllers/UserController";
import { AuthMiddleware } from "./middlewares/authMiddleware";

export const routes = Router()

routes.get('/',(req, res)=>{
    res.send('Bem vindo a API')
})

//User routes

//Create
routes.post('/user', new UserController().create)
//Login 
routes.post('/login',new UserController().login)
//Get Profile
routes.get('/profile',AuthMiddleware,new UserController().getProfile)


//Room routes

//GetAll
routes.get('/room',AuthMiddleware, new RoomController().list)
//Create
routes.post('/room',AuthMiddleware, new RoomController().create)
// Update by id
routes.put('/room/:id',AuthMiddleware, new RoomController().updateById);
// Get by ID
routes.get('/room/:id',AuthMiddleware, new RoomController().getById);
// Delete by ID
routes.delete('/room/:id',AuthMiddleware, new RoomController().deleteById);



//Subject routes
//Create
routes.post('/subject',AuthMiddleware, new SubjectController().create)
//GetAll
routes.get('/subject',AuthMiddleware, new SubjectController().getAll)
// Update by id
routes.put('/subject/:id',AuthMiddleware, new SubjectController().updateById);
// Delete by ID
routes.delete('/subject/:id',AuthMiddleware, new SubjectController().deleteById);
// Get by ID
routes.get('/subject/:id',AuthMiddleware, new SubjectController().getById);







//Room relations routes
routes.post('/room/:idRoom/create',AuthMiddleware, new RoomController().createVideo)
routes.post('/room/:idRoom/subject',AuthMiddleware, new RoomController().roomSubject)