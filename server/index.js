import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ProductRoute from './controllers/product.js'

import FuncRoute from './controllers/func.js'

dotenv.config();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api', ProductRoute);
app.use('/api/tools',FuncRoute);


mongoose.connect(process.env.MONGO_URL)
.then(result => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}
)
.catch(error => {
    message(error)
})