const request = require('request-promise');

const options = {
    uri: 'https://tronalddump.io/random/quote',
    headers: {
        "Accept": "application/json"
    },
    json: true
}

const getTronaldDump = async () => {
    let quote = await request(options).then(data => {
        return data;
    }).catch((err) => {
        console.log(err);
    });
    return quote.value;
}

// getTronaldDump()
//     .then(data => console.log(data));

module.exports = getTronaldDump;