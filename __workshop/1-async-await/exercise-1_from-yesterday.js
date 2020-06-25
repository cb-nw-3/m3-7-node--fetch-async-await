// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try {
        let IssPosition = JSON.parse(await request('http://api.open-notify.org/iss-now.json'));
        console.log(IssPosition.iss_position);
    }
    catch (err) {
        console.log(err);
    }
}

getIssPosition();