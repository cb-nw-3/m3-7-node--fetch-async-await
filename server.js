"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getDadJoke } = require("./__workshop/2-promises-in-action/exercise-3");
const {
  getTronaldDump,
} = require("./__workshop/2-promises-in-action/exercise-4");
const { getGeekJoke } = require("./__workshop/2-promises-in-action/exercise-5");
const PORT = process.env.PORT || 8000;

const handleGetJoke = async (req, res) => {
  let { selectedJokeType } = req.body;
  let response = {};
  if (selectedJokeType == "dad") {
    let dadJoke = await getDadJoke();
    response.joke = `${dadJoke}`;
    res.json(response);
  } else if (selectedJokeType == "tronald") {
    const tronaldJoke = await getTronaldDump();
    response.joke = `${tronaldJoke}`;
    res.json(response);
  } else if (selectedJokeType == "geek") {
    const geekJoke = await getGeekJoke();
    response.joke = `${geekJoke}`;
    res.json(response);
  }
};

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set("view engine", "ejs")

  // endpoints
  .post("/getjoke", handleGetJoke)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
