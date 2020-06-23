// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    // add code here (include a try/catch as well)
    try {
        const result = await request('http://api.open-notify.org/iss-now.json');
        const location = JSON.parse(result);
        const data = {
            lat: location.iss_position.latitude,
            lng: location.iss_position.longitude,
        }
        console.log(data)
    } catch (err) {
        console.log(err);
    }
}

getIssPosition();