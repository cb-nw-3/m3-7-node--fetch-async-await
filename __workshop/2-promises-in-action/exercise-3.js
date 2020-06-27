const request = require('request-promise');


console.log("remember to push this manually from the command line");

const rp = require('request-promise');

var dadJokeOptions = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'application/json'
    },
    json: true // Automatically parses the JSON string in the response
};


const getDadJoke = async () => {
    try 
    {
        let joke = await rp(dadJokeOptions);
        console.log (joke.joke);
    } catch (err) { console.log (err); }
}

getDadJoke();