const rp = require('request-promise');

const options = {
    uri: 'https://geek-jokes.sameerkumar.website/api?format=json',
    headers: {
        'Accept': 'application/json'
    },
    json: true,
};


const getGeekJoke = async () => {
    try {
        const joke = await rp(options);
        return console.log(joke.joke)
    }
    catch (err) {
        return console.log('Error: ', err);
    }
}

getGeekJoke();
