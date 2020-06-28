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
  let joke = '';
  if (path === 'dad') {
    try {
      joke = await asyncWrapperDadJoke();
    } catch (err) {
      console.log(err);
    }
  } else if (path === 'geek') {
    try {
      joke = await getGeekJoke();
    } catch (err) {
      console.log(err);
    }
  } else if (path === 'tronald') {
    try {
      joke = await getTronaldDump();
    } catch (err) {
      console.log(err);
    }
  }
  res.status(200).render('pages/homepage', { joke });
};

async function handlerStatic(req, res) {
  let joke = '';
  switch (req.query.joke) {
    case 'dad':
      joke = await asyncWrapperDadJoke();
      break;
    case 'geek':
      joke = await getGeekJoke();
      break;
    case 'tronald':
      joke = await getTronaldDump();
      break;
  }
  res.status(200).send(joke);
}
module.exports = {
  handler,
  handlerStatic,
};
