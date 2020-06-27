const { getDadJoke } = require("./__workshop/2-promises-in-action/exercise-3");
const { getGeekJoke } = require("./__workshop/2-promises-in-action/exercise-5");
const {
  getTronaldDump,
} = require("./__workshop/2-promises-in-action/exercise-4");

const handleJokeRequest = async (req, res) => {
  const { jokeType } = req.body;
  let stringJoke = "";
  //console.log("handlejokeReq jokeType", jokeType);

  switch (jokeType) {
    case "dad":
      stringJoke = await getDadJoke();
      break;
    case "geek":
      stringJoke = await getGeekJoke();
      break;
    case "tronald":
      stringJoke = await getTronaldDump();
      break;
  }
  console.log("stringJoke", stringJoke);
  res.status(200).send({ status: "success", joke: stringJoke });
};

module.exports = { handleJokeRequest };
