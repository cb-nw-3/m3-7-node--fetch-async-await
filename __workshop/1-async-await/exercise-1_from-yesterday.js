// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try {
        const data = await request('http://api.open-notify.org/iss-now.json');
        const issPosition = JSON.parse(data);
        const result = {
            lat: issPosition.iss_position.latitude,
            lng: issPosition.iss_position.longitude,
        };
        console.log(result);
        return result;
    } catch (err) {
        console.log(`The following error occured: ${err}`);
    }
}

getIssPosition();

// function getIssPosition() {
//     return rp('http://api.open-notify.org/iss-now.json')
//     .then(response => {
//         const issPosition = JSON.parse(response);

//         return {
//             lat: issPosition.iss_position.latitude,
//             lng: issPosition.iss_position.longitude,
//         }
//     })
// }

// getIssPosition().then((result => console.log(result)));