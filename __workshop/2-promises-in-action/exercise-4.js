const rp = require('request-promise');
const options = {
    uri:'https://api.tronalddump.io/random/quote',
    headers: {"Accept": "application/json"}
}
const getTronaldDump = async () => {
    const quoteObj = await rp(options);
    const parsedQuoteObj = JSON.parse(quoteObj);
    return parsedQuoteObj.value;
}

// getTronaldDump()
// .then((quote) => console.log(quote));
