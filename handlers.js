// nothing here yet...
const {
  asyncWrapperDadJoke,
} = require('./__workshop/2-promises-in-action/exercise-3');
const {
  getTronaldDump,
} = require('./__workshop/2-promises-in-action/exercise-4');
const { getGeekJoke } = require('./__workshop/2-promises-in-action/exercise-5');

const handler = async (req, res) => {
  const path = req.query.type;
  let joke;
  if (path === undefined) {
    res.sendFile(__dirname + '/public/make-me-laugh/index.html');
  } else if (path === 'dad') {
    try {
      joke = await asyncWrapperDadJoke();
      res.status(200).render('pages/homepage', { joke });
      // res.status(200).send({ status: 'success', joke: joke });
    } catch (err) {
      console.log(err);
    }
  } else if (path === 'geek') {
    try {
      joke = await getGeekJoke();
      res.status(200).render('pages/homepage', { joke });
      // res.status(200).send({ status: 'success', joke: joke });
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      joke = await getTronaldDump();
      res.status(200).render('pages/homepage', { joke });
      // res.status(200).send({ status: 'success', joke: joke });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = {
  handler,
};
