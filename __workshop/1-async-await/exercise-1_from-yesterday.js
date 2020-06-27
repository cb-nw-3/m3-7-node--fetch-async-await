// Exercise 1 - `getIssPosition`
// -----------------------------



// require the 'request-promise' module.
const rp = require('request-promise');
var ISSoptions = {
    uri: 'http://api.open-notify.org/iss-now.json',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

// Returns the current position of the ISS
const getIssPosition = async () => {
    const result = await rp(ISSoptions);
    let pos = {lat: Number(result.iss_position.longitude), lng: Number(result.iss_position.latitude)};
    console.log(pos);
    return pos;
}

getIssPosition();