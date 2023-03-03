const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

dotenv.config();
require('./Passport_Strategies/Bearer');
require('./DataBase/Connect');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




/**
 * Equipe Routes
 */
const equipesRoute = require('./Routes/equipesRoute')
app.use(equipesRoute)

/**
 * Employee Routes
 */
const employesRoute = require('./Routes/employesRoute');
app.use(employesRoute)

// /**
//  * Mission Routes
//  */
const missionRoute = require('./Routes/missionRoute');
app.use(missionRoute);

/**
 * Listen to requests
 */
app.listen(8000 ,() => {
  console.log(`Server started on port 8000`);
});
