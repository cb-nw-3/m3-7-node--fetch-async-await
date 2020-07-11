const { getDadJoke } = require("./__workshop/2-promises-in-action/exercise-3");
const {
  getTronaldDump,
} = require("./__workshop/2-promises-in-action/exercise-4.js");
const {
  getGeekJoke,
} = require("./__workshop/2-promises-in-action/exercise-5.js");

const handleDadJoke = async (req, res) => {
  const dadJoke = await getDadJoke();
  res.send(dadJoke);
};

const handleGeekJoke = async (req, res) => {
  const geekJoke = await getGeekJoke();
  res.send(geekJoke);
};

const handleTronaldDumpJoke = async (req, res) => {
  const tronaldDumpJoke = await getTronaldDump();
  res.send(tronaldDumpJoke);
};

module.exports = { handleDadJoke, handleGeekJoke, handleTronaldDumpJoke };
