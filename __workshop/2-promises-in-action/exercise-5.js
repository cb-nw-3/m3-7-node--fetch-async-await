const request = require('request-promise');

const getGeekJoke = async () => {


const options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    headers: {
        'Accept': 'application/json',
    },
    json: true,
}

try {
    const getJoke = await request(options)
    const { joke } = getJoke;
    console.log(joke);
} catch (error) {
    console.log('Error:', error);
}
}

getGeekJoke();