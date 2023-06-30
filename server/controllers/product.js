import express from 'express'
const router = express.Router();
import mongoose from 'mongoose';

router.get('/sayHello', async(req,res) => {
    return res.status(200).json({
        message: 'Helo bla bla bla'
    })
})

export default router;

