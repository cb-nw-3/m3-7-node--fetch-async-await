"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

const {
  handleJoke,
  handleDadJoke,
  handleGeekJoke,
  handleTrumpJoke,
} = require("./handlers");
const { getDadJoke } = require("./__workshop/2-promises-in-action/exercise-3");

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
  .use("/make-me-laugh", handleJoke)

  // .use("/joke/dad", async (req, res) => {
  //   const joke = await getDadJoke();
  //   //let newJoke = JSON.toStringify(joke);
  //   res.status(200).send(`<h1>${joke}<h1>`);
  // })

  .use("/joke/dad", handleDadJoke)
  .use("/joke/geek", handleGeekJoke)
  .use("/joke/trump", handleTrumpJoke)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
