const rp = require('request-promise');

const options = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {
        'Accept': 'application/json'
    },
    json: true,
};

const getTronaldDump = async () => {
    try {
        const quote = await rp(options);
        return console.log(quote.value)
    }
    catch (err) {
        return console.log('Error: ', err);
    }
}

getTronaldDump();
