import User from "../models/user_model.js";
import { Response } from '../utils/core.js'

const UserController = {
    all: async (req, res, next) => {
        try {
            const page = Number(req.query.page);
            const perPage = Number(req.query.perPage);
            const offset = (page - 1) * perPage;
            const search = req.query.search || "";
            const filter = {};
            if (search) {
                filter['$text'] = { $search: search }
            }

            const users = await User.find(filter).limit(perPage).skip(offset).sort({ createdAt: -1 })
            const total = await User.countDocuments(filter);
            users && users.length !== 0
                ? Response.success(res, 'All users', { users, total }, 200)
                : Response.fail(res, 'User Not Found!', {}, 400)
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
        try {
            if (req.user) {
                Response.success(res, 'Detail User', req.user, 200)
            }
        } catch (error) {
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                return Response.fail(res, 'Name and Email are required!', {}, 400);
            }
            const user = req.user;
            user.name = name;
            user.email = email;
            await user.save();
            Response.success(res, 'User updated successfully!', user, 200);
        } catch (error) {
            next(error);
        }

    },
    destroy: async (req, res, next) => {
        try {
            const user = req.user;
            if (!user) {
                return Response.fail(res, 'delete fail', {}, 400)
            }
            await user.deleteOne();
            Response.success(res, 'Delete success!', user, 200)
        } catch (error) {
            next(error)
        }
    },
}

export default UserController;