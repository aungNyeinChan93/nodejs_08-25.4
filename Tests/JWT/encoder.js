import { JWT } from '../../utils/core.js'
import jwt from 'jsonwebtoken'

const token = jwt.sign('123123', 'secrect_key1', { algorithm: 'HS256' });
console.log(token);

const verifyToken = jwt.verify(token, 'secrect_key1', (err, decoded) => {
    if (err) {
        console.log(err);
        return false
    }
    return decoded;
})
console.log(verifyToken);


const encoded_token = JWT.encode('user_id')
console.log(encoded_token);

const decoded_token = JWT.decode(encoded_token)
console.log(decoded_token);



