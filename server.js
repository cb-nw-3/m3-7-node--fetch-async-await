"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { handleJoke } = require("./handlers");
const PORT = process.env.PORT || 8000;

let myFunction = (req, res) => {
  // the server is passing the function the request and response objects.
  // the browser sends the request object coming in and then expects the response object of different responses such as res.render
  console.log("request home page");
  res.send("Welcome to our HP!");
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

  // endpoints establish connections
  .post("/jokes", handleJoke)
  // this is end point listening for post requests to jokes address
  .get("/", myFunction)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
