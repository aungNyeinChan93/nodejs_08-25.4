import { Response, ErrorLog } from '../utils/core.js'

/**
 * Middleware to handle errors in the application.
 * Logs the error and sends a standardized error response.
 * 
 * @param {Error} err - The error object.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {Function} next - The next middleware function.
 */

const errorHandler = (err, req, res, next) => {
    console.error(err)
    ErrorLog.write(err.message)
    Response.fail(res, 'Server Error!!! ', err.message, 500)
}

export default errorHandler;
