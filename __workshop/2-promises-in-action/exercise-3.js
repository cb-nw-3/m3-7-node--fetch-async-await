const rp = require('request-promise');

const options = {
    uri:'https://icanhazdadjoke.com/',
    headers: {"Accept": "application/json"}
}

const getDadJoke = async () => {
    const jokeObj = await rp(options);
    const parsedJoke =  await JSON.parse(jokeObj);
    return parsedJoke.joke;
}

//There are some great jokes in there! XD

// getDadJoke()
//     .then((jk) => console.log(jk));