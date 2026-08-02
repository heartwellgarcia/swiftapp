const express = require('express');
const cors = require('cors');
const bparser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3000
const app = express();

const userRoute = require('./route/userRoute');

app.use(express.json());
app.use(cors());
app.use(bparser());

app.get('/', (req,res) => {
    res.status(200).send("This is Default")
});

app.use('/api/user/', userRoute);

module.exports = app;
