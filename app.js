import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDb from './db/db.js';

import router from './routes/transaction.js'


dotenv.config()

const PORT = process.env.PORT || 500;


const app = express();


// middleware
app.use(express.json());
app.use(cors());

// routes

app.use('/api/v1',router);

// app.use('/api/v1/addincome',addincome);
// app.use('/api/v1/getincomes',getAllData);
// app.use('/api/v1/deleteincome',deleteData);
// app.use('/api/v1/addexpense',addExpense);
// app.use('/api/v1/getexpenses',getExpenses);
// app.use('/api/v1/deleteexpense',deleteExpense);

const server = () => {
    connectDb();
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`);
    })
}

server()



