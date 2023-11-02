import express from 'express';
import dotenv from 'dotenv';

//? Custom dependencies
import dbConnect from "./config/database.js";
import userRouter from './routes/user.js';

//* Development dependencies
import chalk from 'chalk';

//? Requirements
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

//? Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRouter)

//? Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//? Server
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error in starting server");
        return console.log(chalk.red(`Error in starting server: ${err}`));
    }

    dbConnect();    
    console.log(chalk.blue(`Server running on port ${PORT}`));
})
