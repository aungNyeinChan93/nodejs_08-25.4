import { Router } from "express";
import UserController from '../controllers/userController.js'
import logMiddleware from "../middleware/logmiddleware.js";

const router = Router();

router.route('/')
    .get(logMiddleware, UserController.all)
    .post(logMiddleware, UserController.create)

export default router;