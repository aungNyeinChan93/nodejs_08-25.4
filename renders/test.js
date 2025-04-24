import express from 'express'

const app = express();

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

export default server_render;