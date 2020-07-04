const { getDadJoke } = require('./__workshop/2-promises-in-action/exercise-3');
const {
  getTronaldDump,
} = require('./__workshop/2-promises-in-action/exercise-4');
const { getGeekJoke } = require('./__workshop/2-promises-in-action/exercise-5');

const handleJoke = async (req, res) => {
  const { type } = req.body;
  let joke = '';
  switch (type) {
    case 'geek':
      joke = await getGeekJoke();
      break;
    case 'tronald':
      joke = await getTronaldDump();
      break;
    case 'dad':
    default:
      joke = (await getDadJoke()).joke;
      break;
  }

  res.status(200).json({ data: joke });
};

const handleDadJoke = async (req, res, next) => {
  let joke = await getDadJoke();
  res.status(200).json({ joke });
};

const handleGeekJoke = async (req, res, next) => {
  let joke = await getGeekJoke();
  res.status(200).json({ joke });
};

const handleTrumpJoke = async (req, res, next) => {
  let joke = await getTronaldDump();
  res.status(200).json({ joke });
};

module.exports = { handleDadJoke, handleGeekJoke, handleTrumpJoke, handleJoke };
