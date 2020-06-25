const request = require('request-promise');



const getDadJoke = async () => {
    const obj = {
        uri: 'https://icanhazdadjoke.com',
        headers: {
            'Accept': 'application/json',
        },
        json: true,
    };
    
    const getJoke = await request(obj);
    const { joke } = getJoke;
    console.log(joke);

    
}

const getTronaldDump = async () => {
    const obj = {
        uri: 'https://api.tronalddump.io/random/quote',
        headers: {
            'Accept': 'application/json',
        },
        json: true,
    };
    
    const getQuote = await request(obj);
    const { value } = getQuote;
    console.log(value);  
}

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

module.exports = {
    getDadJoke,
    getTronaldDump,
    getGeekJoke,
}