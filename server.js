'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

function hello1()
{
    console.log("hello1");
}


const { serveUpJokeEJSPage, respondWithJokeOnly } = require('./jokeServing.js');


const getJoke = (req, res) => 
{
    // res.status(200).render('index.html');
    //let joke = "Nothing here yet";
    //res.status(200).render('pages/jokeResult', {joke:joke});
    res.redirect('/make-me-laugh')

}


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
    .get('/', getJoke)
    .post('/jokePost', serveUpJokeEJSPage)
    .post('/dropDownResponse', respondWithJokeOnly)

    // endpoints

    .listen(PORT, () => console.log(`Listening on port ${PORT}`));

