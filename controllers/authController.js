import User from '../models/user_model.js'
import { Response, Bcrypt, ErrorLog } from '../utils/core.js'

const AuthController = {
    register: async (req, res, next) => {
        try {
            let { name, email, password } = req.body;
            password = await Bcrypt.hash(password, Number(process.env.SALT) || 10)
            if (!name || !email || !password) {
                return Response.fail(res, "Fields are required!", {}, 400)
            }
            const db_user = await User.findOne({ email: email });
            // if (db_user) return Response.fail(res, 'Email is already exists', {}, 400);
            if (db_user) {
                ErrorLog.write('Email already exisit!');
                return Response.fail(res, 'Email is already exists', {}, 400);
            }
            const user = await User({ name, email, password }).save();
            if (user) Response.success(res, 'Register Success', user, 201)
        } catch (error) {
            next(error)
        }
    },
}

export default AuthController;