import User from "../models/user_model.js";
import { Response } from '../utils/core.js'

const UserController = {
    all: async (req, res, next) => {
        try {
            res.json({ result: req.message })
        } catch (error) {
            next(error)
        }
    },
    create: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return Response.fail(res, 'Some Field are required!', {}, 400)
            }
            const db_user = await User.findOne({ email: email });
            if (db_user) {
                return Response.fail(res, 'Email already exists', {}, 400)
            }
            const newUser = await User({ name, email, password }).save();
            if (!newUser) return next(new Error('User create fail'))
            Response.success(res, 'User Create Success!', newUser, 201)
        } catch (error) {
            next(error)
        }
    },
    show: async (req, res, next) => {

    },
    update: async (req, res, next) => {

    },
    destroy: async (req, res, next) => {

    },
}

export default UserController;