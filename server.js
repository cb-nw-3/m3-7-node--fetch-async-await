'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { handleJoke } = require('./__workshop/2-promises-in-action/handlers');

console.log("*****HANDLEJOKE: ", handleJoke)

const PORT = process.env.PORT || 8000;

express()
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: false }))
    .set('view engine', 'ejs')

    // endpoints

    //absolute path of the directory containing the currently executing file
    .get('/', (req, res) => {
        res.sendFile(__dirname + '/public/make-me-laugh/index.html');
    })
    .post('/joke', handleJoke)


    .listen(PORT, () => console.log(`Listening on port ${PORT}`));