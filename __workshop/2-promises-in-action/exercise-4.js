const request = require('request-promise');

const getTronaldDump = async () => {
    try {
        const obj = {
            uri: 'https://api.tronalddump.io/random/quote',
            headers: {
                accept: 'application/json'
            }
        }
        const result = await request(obj);
        const parseObj = JSON.parse(result);
        return parseObj.value

    } catch (err) {
        console.log(err)
    }
}

// getTronaldDump()
//     .then(data => console.log(data));
module.exports = { getTronaldDump };
