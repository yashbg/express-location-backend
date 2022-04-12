const express = require('express');

const PORT = 3000;

// const DBConnection = require('database');

const locationRouter = require('./locationRouter');

const app = express();

app.use('/', locationRouter);
