// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    // add code here (include a try/catch as well)
    try {
        const result = await rp('http://api.open-notify.org/iss-now.json');
        const parsedResult = JSON.parse(result);
        const location = {
            lat: parsedResult.iss_position.latitude,
            lng: parsedResult.iss_position.longitude,
        }; 
        console.log(location);
    } catch(error) {
        console.log(error)
    }
}
getIssPosition();

//Async Await is awesome!!! Much easier to digest