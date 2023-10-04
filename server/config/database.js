const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose
        .connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log(`MongoDB Connected`))
        .catch((err) => {
            console.error('Error in connecting to database: ', err);
            console.log('Error in connecting to database: ', err);
            process.exit(1);
        });
};
