require('dotenv').config({path: './.env'})
const express = require('express');
const app = express();

require('./models/dbconfig').dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
})