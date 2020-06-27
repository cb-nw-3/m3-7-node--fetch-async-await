const request = require('request-promise');

const getGeekJoke = async () => {
    try {
        const joke = await request('https://geek-jokes.sameerkumar.website/api');
        const parseObj = JSON.parse(joke);
        return parseObj
    } catch (err) {
        console.log(err);
    }
}

// getGeekJoke()
//     .then(data => console.log(data));

module.exports = { getGeekJoke };