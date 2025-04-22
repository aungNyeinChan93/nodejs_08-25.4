import { Router } from "express";
import UserController from '../controllers/userController.js'
import logMiddleware from "../middleware/logmiddleware.js";
import getById_middleware from "../middleware/getById_middleware.js";

const router = Router();

router.route('/')
    .get(logMiddleware, UserController.all)
    .post(logMiddleware, UserController.create)

router.route('/:id')
    .get(getById_middleware, UserController.show)
    .put(getById_middleware, UserController.update)
    .delete(getById_middleware, UserController.destroy)

export default router;