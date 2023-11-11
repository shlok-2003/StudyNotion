import dotenv from 'dotenv';

//* Development dependencies
import chalk from 'chalk';

//? Custom dependencies
import dbConnect from './config/database.js';
import cloudConnect from './config/cloudinary.js';

//! Importing app
import app from './app.js';

//? Requirements
dotenv.config();
const PORT = process.env.PORT || 4001;

//? Server
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error in starting server');
        console.log(chalk.red(`Error in starting server: ${err}`));
        process.exit(1);
    }

    dbConnect();
    cloudConnect();

    console.log(chalk.blue(`Server running on port ${PORT}`));
});
