import User from '../models/user_model.js'

const getById_middleware = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (user) {
        req.user = user;
    }
    next();
}

export default getById_middleware;