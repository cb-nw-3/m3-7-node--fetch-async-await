const request = require('request-promise');

const options = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        "Accept": "application/json"
    },
    json: true
}

const getDadJoke = async () => {
    return await request(options)
        .then(data => { return data.joke });
}

// eh doyyyyy. Yeah, you need to run the function to get it to run.

// getDadJoke().then(data => { console.log(data) });

module.exports = getDadJoke;