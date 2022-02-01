const express = require('express');
const app = express();
const cors = require('cors');
const bodyParse = require('body-parser');
const textRouter = require('./routers/text');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chyaKonski:208129726@cluster0.igvmj.mongodb.net/chayaKonski?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use('/',bodyParse.json())

app.use(cors());

app.use('/Text', textRouter);

app.listen(7500,()=>{console.log("app is listening 7500")})
