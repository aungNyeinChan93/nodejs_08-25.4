
const Response = {
    success: (res, message = '', result = {}, status = 200) => {
        res.status(status).json({
            message,
            result
        })
    },
    fail: (res, message = '', result = {}, status = 404) => {
        res.status(status).json({
            message,
            result
        })
    },


}

export { Response }