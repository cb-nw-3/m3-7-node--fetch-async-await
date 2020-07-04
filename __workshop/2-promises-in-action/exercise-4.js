const request = require('request-promise');

const getTronaldDump = async () => {
  try {
    const options = {
      uri: 'https://api.tronalddump.io/random/quote',
      headers: {
        Accept: 'application/json',
      },
    };
    const quoteObj = await request(options);
    const quoteParsed = JSON.parse(quoteObj);
    console.log(quoteParsed);
    const onlyQuote = quoteParsed.value; // This extra steps is needed compared to exercice 3, as the JSON object has severa keys.
    console.log(onlyQuote);
    return onlyQuote;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDump().then((data) => console.log(data));

module.exports = { getTronaldDump };
