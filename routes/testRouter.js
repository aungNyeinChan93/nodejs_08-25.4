import { Router } from "express";

const router = Router();

// route params id only number

router.get('/number/:id', (req, res, next) => {
    res.json(req?.params?.id ?? 'test')
})

// router.get("*", (req, res, next) => {
//     res.send('404 page')
// })

export default router;