const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const path = require('path');
const body_parser = require('body-parser');
const port = 8000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');


const populateRoute = require('./route/porulateRoute')

app.use(populateRoute)





const dbCon = "mongodb+srv://ankandb:vnkhSzkCKB5LXe20@cluster0.jmt30c3.mongodb.net/Node_project_7"
mongoose.connect(dbCon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {
            console.log(`server running http://localhost:${port}`);
            console.log(`databace connected`);
        })
    }).catch(err => {
        console.log(err);
    })


