const rp = require('request-promise');

const getGeekJoke = async () => {
    const getJoke = await rp('https://geek-jokes.sameerkumar.website/api?format=json');
    return getJoke;
}

// getGeekJoke()
// .then((jk) => console.log(jk))

