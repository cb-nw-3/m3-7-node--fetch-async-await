const rp = require('request-promise');

const options = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'application/json'
    },
    // https://bit.ly/2CavDn6
    json: true,
};

const getDadJoke = async () => {
    try {
        const joke = await rp(options);
        // const data = JSON.parse(joke);
        return console.log(joke.joke)
    }
    catch (err) {
        return console.log('Error: ', err);
    }
}

getDadJoke();
