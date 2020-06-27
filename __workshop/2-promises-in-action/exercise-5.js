const rp = require('request-promise');

let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET',
    json: true // Automatically parses the JSON string in the response

}


const getGeekJoke = async () => {
    try 
    {
        const geekJoke = await rp(options);
        console.log(geekJoke.joke);
    } catch (err) { console.log (err); }
}


getGeekJoke();