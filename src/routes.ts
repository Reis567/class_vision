import { Router } from "express";
import { SubjectController } from "./controllers/SubjectControllers";
import { RoomController } from "./controllers/RoomController";
import { ApiError ,BadRequestError} from "./helpers/api-errors";
import { StatusCodes } from "http-status-codes";
import { UserController } from "./controllers/UserController";
import { AuthMiddleware } from "./middlewares/authMiddleware";

export const routes = Router()
/**
 * @route GET /
 * @description Welcome to the API
 * @access Public
 */
routes.get("/", (req, res) => {
    res.send("Bem-vindo a ClassVision API");
  });
  
  // User Routes
  /**
   * @route POST /user
   * @description Create a new user
   * @access Public
   */
  routes.post("/user", new UserController().create);
  
  /**
   * @route POST /login
   * @description User login
   * @access Public
   */
  routes.post("/login", new UserController().login);
  
  /**
   * @route GET /profile
   * @description Get user profile
   * @access Private (requires authentication)
   */
  routes.get("/profile", AuthMiddleware, new UserController().getProfile);
  
  // Room Routes
  /**
   * @route GET /room
   * @description Get all rooms
   * @access Private (requires authentication)
   */
  routes.get("/room", AuthMiddleware, new RoomController().list);
  
  /**
   * @route POST /room
   * @description Create a new room
   * @access Private (requires authentication)
   */
  routes.post("/room", AuthMiddleware, new RoomController().create);
  
  /**
   * @route PUT /room/:id
   * @description Update a room by ID
   * @access Private (requires authentication)
   */
  routes.put("/room/:id", AuthMiddleware, new RoomController().updateById);
  
  /**
   * @route GET /room/:id
   * @description Get a room by ID
   * @access Private (requires authentication)
   */
  routes.get("/room/:id", AuthMiddleware, new RoomController().getById);
  
  /**
   * @route DELETE /room/:id
   * @description Delete a room by ID
   * @access Private (requires authentication)
   */
  routes.delete("/room/:id", AuthMiddleware, new RoomController().deleteById);
  
  /**
   * @route POST /room/:idRoom/create
   * @description Create a video in a specific room
   * @access Private (requires authentication)
   */
  routes.post("/room/:idRoom/create", AuthMiddleware, new RoomController().createVideo);
  
  /**
   * @route POST /room/:idRoom/subject
   * @description Associate a room with a subject
   * @access Private (requires authentication)
   */
  routes.post("/room/:idRoom/subject", AuthMiddleware, new RoomController().roomSubject);
  
  // Subject Routes
  /**
   * @route POST /subject
   * @description Create a new subject
   * @access Private (requires authentication)
   */
  routes.post("/subject", AuthMiddleware, new SubjectController().create);
  
  /**
   * @route GET /subject
   * @description Get all subjects
   * @access Private (requires authentication)
   */
  routes.get("/subject", AuthMiddleware, new SubjectController().getAll);
  
  /**
   * @route PUT /subject/:id
   * @description Update a subject by ID
   * @access Private (requires authentication)
   */
  routes.put("/subject/:id", AuthMiddleware, new SubjectController().updateById);
  
  /**
   * @route DELETE /subject/:id
   * @description Delete a subject by ID
   * @access Private (requires authentication)
   */
  routes.delete("/subject/:id", AuthMiddleware, new SubjectController().deleteById);
  
  /**
   * @route GET /subject/:id
   * @description Get a subject by ID
   * @access Private (requires authentication)
   */
  routes.get("/subject/:id", AuthMiddleware, new SubjectController().getById);