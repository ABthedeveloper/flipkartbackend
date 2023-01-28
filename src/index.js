const express = require('express');
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//Routes
const authRoutes = require('./routes/auth')

//Constant
env.config();

//Middlewear
app.use(bodyParser());
app.use('/api',authRoutes)


//mongodb connection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.amnbdmx.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{console.log("mongodb connection success");});


app.listen(process.env.PORT,
    ()=>console.log(`server is running ${process.env.PORT}`));