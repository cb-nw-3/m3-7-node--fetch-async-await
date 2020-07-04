// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try {
        const response = await rp('http://api.open-notify.org/iss-now.json');
        // console.log(response);

        const issLocation = JSON.parse(response);
        // console.log(issLocation);
        
        const data = {
            lat: issLocation.iss_position.latitude,
            lng: issLocation.iss_position.longitude,
        }
        
        console.log(data);
        return data;
    }
    catch (err) {
        return console.log('Error: ', err);
    }
}

getIssPosition();
