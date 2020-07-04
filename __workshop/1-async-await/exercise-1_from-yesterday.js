// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
  try {
    const response = await request('http://api.open-notify.org/iss-now.json');
    const issLocation = JSON.parse(response);
    // console.log(issLocation);
    const data = {
      lat: issLocation.iss_position.latitude,
      Lng: issLocation.iss_position.longitude,
    };
    console.log(data);
    return data;
  } catch (err) {
    return console.log('Error: ', err);
  }
};

getIssPosition();
