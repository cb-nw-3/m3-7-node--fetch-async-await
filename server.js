'use strict';

const express = require('express');
// const bodyParser = require('body-parser'); not longer requiered https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
const morgan = require('morgan');
const { handler, handlerStatic } = require('./handlers');

const PORT = process.env.PORT || 8000;

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get('/make-me-laugh-ejs', handler)
  .get('/getJoke', handlerStatic)
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
