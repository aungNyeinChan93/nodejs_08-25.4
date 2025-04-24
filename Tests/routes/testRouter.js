import { Router } from "express";

const router = Router();

router.get('/error', (req, res, next) => {
    req.on('end', () => {
        console.log('/api/error => end event');

    })
    // next(new Error('This is testing for error middleware!'))
    throw new Error('throw error!')
})

export default router;