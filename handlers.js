// nothing here yet...

const { getDadJoke } = require("./__workshop/2-promises-in-action/exercise-3");
const {
  getTronaldDump,
} = require("./__workshop/2-promises-in-action/exercise-4");

const { getGeekJoke } = require("./__workshop/2-promises-in-action/exercise-5");

const handleDadJoke = async (req, res, next) => {
  let joke = await getDadJoke();
  //res.status(200).send(`${joke}`);
  //console.log(joke);
  //return JSON.stringify(joke);
  //res.status(200).send(`<h1>${joke}<h1>`);
  res.status(200).json({ joke });
};

const handleGeekJoke = async (req, res, next) => {
  let joke = await getGeekJoke();
  //res.status(200).send(`${joke}`);
  //console.log(joke);
  //return joke;
  //res.status(200).send(`<h1>${joke}<h1>`);
  res.status(200).json({ joke });
};

const handleTrumpJoke = async (req, res, next) => {
  let joke = await getTronaldDump();
  //res.status(200).send(`${joke}`);
  //console.log(joke);
  //return joke;
  //res.status(200).send(`<h1>${joke}<h1>`);
  res.status(200).json({ joke });
};

const handleJoke = async (req, res) => {
  console.log(req.body);
  const { type } = req.body;
  let joke = "";
  switch (type) {
    case "geek":
      joke = await getGeekJoke();
      break;
    case "tronald":
      joke = await getTronaldDump();
      break;
    case "dad":
    default:
      joke = (await getDadJoke()).joke;
      break;
  }

  res.status(200).json({ data: joke });
};

module.exports = { handleDadJoke, handleGeekJoke, handleTrumpJoke, handleJoke };
