const { json } = require('express');
const express = require('express');
const connectDB = require('./config/db');
const todoRouters = require('./routes/ToDoRoute');
const userRouters = require('./routes/UserRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

connectDB();

app.use("/api/v1",todoRouters);
app.use("/api/v1/user",userRouters);

module.exports = app;