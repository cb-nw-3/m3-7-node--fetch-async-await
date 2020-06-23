// nothing here yet...

const { getDadJoke } = require("./__workshop/2-promises-in-action/exercise-3");
const {
  getTronaldDump,
} = require("./__workshop/2-promises-in-action/exercise-4");

const { getGeekJoke } = require("./__workshop/2-promises-in-action/exercise-5");

const handleJoke = async (req, res, next) => {
  let joke = await getDadJoke();
  res.status(200).send(`${joke}`);
};

module.exports = { handleJoke };
