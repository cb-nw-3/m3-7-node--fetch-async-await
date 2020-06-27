"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getDadJoke, getTronaldDump, getGeekJoke } = require("./handlers");

const PORT = process.env.PORT || 8000;

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
  .post("/make-me-laugh", async (req, res) => {
    let joke;

    try {
      switch (req.body.type) {
        case "dad":
          joke = await getDadJoke();
          break;
        case "geek":
          joke = await getGeekJoke();
          break;
        case "tronald":
          joke = await getTronaldDump();
          break;
      }
    } catch (error) {
      res.send({
        status: "error",
        error,
      });
      return;
    }
    console.log(joke);
    res.send({
      status: "success",
      joke,
    });
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
