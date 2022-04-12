const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const locationRouter = require('./locationRouter');

mongoose.connect('mongodb://localhost:27017/locationApp')
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error in connecting to database');
        console.log(err);
    });

const app = express();

const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', locationRouter);

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
