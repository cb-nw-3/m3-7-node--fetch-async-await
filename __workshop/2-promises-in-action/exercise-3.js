const request = require('request-promise');

const getDadJoke = async () => {
    try {
        const obj = {
            uri: 'https://icanhazdadjoke.com/',
            headers: {
                accept: 'application/json',
            }
        }
        const joke = await request(obj);

        return JSON.parse(joke);
    } catch (err) {
        console.log(err)
    }
}

getDadJoke()
    .then(data => console.log(data.joke));

module.exports = { getDadJoke };
