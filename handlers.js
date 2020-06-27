const request = require('request-promise');



const getDadJoke = async (req,res) => {
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
    res.json({ joke: joke });

    
}

const getTronaldDump = async (req, res) => {
    const obj = {
        uri: 'https://api.tronalddump.io/random/quote',
        headers: {
            'Accept': 'application/json',
        },
        json: true,
    };
    
    const getQuote = await request(obj);
    const { value } = getQuote;
    const joke = value;
    console.log(joke);  
    res.json({ joke: joke });
}

const getGeekJoke = async (req, res) => {


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
        res.json({ joke: joke});
    } catch (error) {
        console.log('Error:', error);
    }
}

module.exports = {
    getDadJoke,
    getTronaldDump,
    getGeekJoke,
}