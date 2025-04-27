const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine');
require('dotenv').config();
const port = process.env.PORT
const hostname = process.env.HOST_NAME || 'localhost'
const webRoute = require('./routes/web');// import web route
const connection = require('./config/connectDB');// import connection to database
//Config request body-parser
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
//config view engine
configViewEngine(app);
app.use(webRoute)//use web route

app.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}`)
})