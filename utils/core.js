import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'

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

const ErrorLog = {
    write: (err) => {
        const fileName = Date.now().toLocaleString() + "_anc_" + ".txt"
        const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../logger/errors/', fileName)
        fs.writeFile(filePath, JSON.stringify(err), { encoding: 'utf-8' }, (error) => {
            if (!error) {
                console.log(`Error Log Saved!`);
            } else {
                console.log(error.message);
            }
        })
    },
    read: async (fileName) => {
        return await fs.promises.readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '../logger/errors/', fileName),
            { encoding: "utf-8" })
    }
}

export { Response, JWT, Bcrypt, ErrorLog }
