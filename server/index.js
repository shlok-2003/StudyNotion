const express = require('express');
require('dotenv').config();

// Requirements
const PORT = process.env.PORT || 4001;
const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, (err) => {
    if(err) {
        return console.log('Error in starting app: ', err);
    }

    console.log(`App started on port: ${PORT}`);
})