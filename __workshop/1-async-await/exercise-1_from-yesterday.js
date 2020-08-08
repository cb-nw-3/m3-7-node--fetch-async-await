// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  try {
    const answer = await request(
      'https://api.wheretheiss.at/v1/satellites/25544'
    );
    const decoder = JSON.parse(answer);
    const data = { lat: decoder.latitude, lng: decoder.longitude };
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getIssPosition();
