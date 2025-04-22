import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

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

const JWT = {
    encode: (payload) => {
        return jwt.sign(payload, process.env.SECRECT_KEY || "secrect_key", { algorithm: "HS256" })
    },
    decode: (token) => {
        return jwt.verify(token, process.env.SECRECT_KEY || 'secrect_key', (err, decoded) => {
            if (err) {
                console.log(err);
                return false;
            }
            return decoded;
        })
    }
}

const Bcrypt = {
    hash: async (payload, salt) => {
        return bcrypt.hash(payload, await bcrypt.genSalt(salt));
    },
    compare: (plain, hash) => {
        return bcrypt.compare(plain, hash)
    }
}

export { Response, JWT, Bcrypt }
