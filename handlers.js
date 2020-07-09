const { getDadJoke } = require("./__workshop/2-promises-in-action/exercise-3");
const {
  getTronaldDump,
} = require("./__workshop/2-promises-in-action/exercise-4");
const { getGeekJoke } = require("./__workshop/2-promises-in-action/exercise-5");

const handleJoke = async (req, res) => {
  // this function expects a request and a response object.
  //it expects this request object to have a body and a type property
  const type = req.body.type;
  //the request is an object inside that object is a body
  //req is the paremeter and it evaluates to the object body which evaluates to another object
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
      data = await getDadJoke();
      joke = data.joke;
      console.log(joke);
      break;
  }
  res.status(200).json({ data: joke });
};

module.exports = { handleJoke };
