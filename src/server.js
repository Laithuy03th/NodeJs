const express = require('express')
//import express from 'express'
const configViewEngine = require("./configs/viewEngine");
require('dotenv').config();
const { Client } = require('pg');


const initWebRouter = require('./routes/web');
const {client} = require("./configs/connectDB");


const app = express()
const port = process.env.PORT ||  8080;



console.log(">> check port: ", port);

//set up view engine
configViewEngine(app);

//init web route
initWebRouter(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});// Connect to the database
// Execute SQL queries here
