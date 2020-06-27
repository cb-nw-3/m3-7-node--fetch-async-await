const request = require('request-promise');


console.log("remember to push this manually from the command line");

const rp = require('request-promise');

var trumpQuoteOptions = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {
        'Accept': 'application/json'
    },
    json: true // Automatically parses the JSON string in the response
};




const getTronaldDump = async () => {
    try 
    {
        let quote = await rp(trumpQuoteOptions);
        console.log (quote.value);
    } catch (err) { console.log (err); }

}

getTronaldDump();
