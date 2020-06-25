'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const request = require('request-promise');
const { getDadJoke, getTronaldDump, getGeekJoke } = require('./handlers');

const PORT = process.env.PORT || 8000;

express()
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
	.use(morgan('dev'))
	.use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({extended: false}))
    .set('view engine', 'ejs')

    // endpoints
    .get('/make-me-laugh/getDadJoke', getDadJoke)
    .get('/make-me-laugh/getTronaldDump', getTronaldDump)
    .get('/make-me-laugh/getGeekJoke', getGeekJoke)
    .get('*', (req,res) => {
        res.status(400).send('Oh no! Something went wrong!');
    })
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));