
const logMiddleware = async (req, res, next) => {
    req.message = 'this is message from logMiddleware';
    console.log(req.message);
    next();
}

export default logMiddleware;