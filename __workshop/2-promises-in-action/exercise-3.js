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

getDadJoke();