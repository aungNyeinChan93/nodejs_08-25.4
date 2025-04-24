import dotenv from 'dotenv';
import express from 'express';
import mongooseConnect from './config/db.js';
import path from 'path'
import cors from 'cors'
import morgan from 'morgan';
import fs from 'fs'
import { fileURLToPath } from 'url';
import UserRouter from './routes/usersRouter.js'
import AuthRouter from './routes/authRouter.js'
import TestRouter from './Tests/routes/testRouter.js'
import errorHandler from './middleware/errorHandler.js';


dotenv.config();
mongooseConnect();
const app = express();
app.use(express.json());
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')))
app.use(cors())
app.set('view engine', 'ejs')

// morgan with log
const request_stream = fs.createWriteStream(path.join(path.dirname(fileURLToPath(import.meta.url)), 'logger', 'requests', 'all.txt'), { encoding: 'utf-8' })
app.use(morgan(':method :url :status :date :user-agent', { stream: request_stream }))

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

    app.get('/customers', (req, res, next) => {
        const customers = ['koko', 'susu', 'mgmg'];
        res.render('customers/index', { customers }, (err, html) => {
            console.log(err);
        })
    })
}

const routes = () => {
    app.use('/api/users', UserRouter)
    app.use('/api/user', AuthRouter)

    // for testing routes
    app.use('/api/tests', TestRouter)

    // Errors_handler
    app.use(errorHandler)
}
