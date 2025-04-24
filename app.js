import dotenv from 'dotenv';
import express from 'express';
import mongooseConnect from './config/db.js';
import path from 'path'
import { fileURLToPath } from 'url';
import { Response, ErrorLog } from './utils/core.js'
import UserRouter from './routes/usersRouter.js'
import AuthRouter from './routes/authRouter.js'
import TestRouter from './routes/testRouter.js'
import cors from 'cors'
import morgan from 'morgan';


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')))
app.use(cors())
app.use(morgan(':method :url :status :date :user-agent'))  //custome morgan
app.set('view engine', 'ejs')

mongooseConnect();
// mongoose.connect(process.env.DB_URL).then(() => {
//     console.log(`${process.env.DB_URL} is running!`);

// })

// server 
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    server_render();
    routes();
});


const server_render = () => {
    app.get('/', (_, res) => {
        res.render('home', { name: 'aung' })
    })

    app.get('/users', (req, res, next) => {
        const users = [
            { name: 'koko', age: 30 },
            { name: 'momo', age: 33 },
            { name: 'susu', age: 22 },
        ]
        res.render('users', { users });
    })

    app.get('/products', (req, res, next) => {
        res.render('products/index', { products: 'this is products' })
    })
}

const routes = () => {
    app.use('/api/users', UserRouter)
    app.use('/api/user', AuthRouter)
    app.use('/api/tests', TestRouter)

    // Errors_handler
    app.use((err, req, res, next) => {
        ErrorLog.write(err.message)
        Response.success(res, 'Server Error', err.message, 500)
    })
}
