"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getDadJoke, getGeekJoke, getTronaldDump } = require("./handlers");

const PORT = process.env.PORT || 8000;

//functions
const handleDadJoke = async (req, res) => {
  let dadJoke = await getDadJoke();
  res.send(dadJoke);
};

const handleTronaldDump = async (req, res) => {
  let tronaldJoke = await getTronaldDump();
  res.send(tronaldJoke);
};

const handleGeekJoke = async (req, res) => {
  let geekJoke = await getGeekJoke();
  res.send(geekJoke);
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
  .get("/dadjoke", handleDadJoke)
  .get("/tronald", handleTronaldDump)
  .get("/geekjoke", handleGeekJoke)
  .get("*", (req, res) => {
    res.status(400).send("ERROR 404");
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
