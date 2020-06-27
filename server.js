'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

// pull functions from exercises

const getDadJoke = require('./__workshop/2-promises-in-action/exercise-3.js');
const getTronaldDump = require('./__workshop/2-promises-in-action/exercise-4.js');
const getGeekJoke = require('./__workshop/2-promises-in-action/exercise-5.js');

const handleDadJoke = async (req, res) => {
    let dadJoke = await getDadJoke();
    res.send(dadJoke);
}

const handleTronaldJoke = async (req, res) => {
    let tronaldJoke = await getTronaldDump();
    res.send(tronaldJoke);
}

const handleGeekJoke = async (req, res) => {
    let geekJoke = await getGeekJoke();
    res.send(geekJoke);
}

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

    .get('/dadjoke', handleDadJoke)
    .get('/tronald', handleTronaldJoke)
    .get('/geekjoke', handleGeekJoke)

    .listen(PORT, () => console.log(`Listening on port ${PORT}`));