const request = require('request-promise');

const getTronaldDump = async () => {
    const obj = {
        uri: 'https://api.tronalddump.io/random/quote',
        headers: {
            'Accept': 'application/json',
        },
        json: true,
    };
    
    const getQuote = await request(obj);
    const { value } = getQuote;
    console.log(value);  
}

getTronaldDump();

module.exports = { getTronaldDump };