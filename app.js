const { json } = require('express');
const express = require('express');
const connectDB = require('./config/db');
const todoRouters = require('./routes/ToDoRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

connectDB();

app.use("/api/v1",todoRouters);

module.exports = app;