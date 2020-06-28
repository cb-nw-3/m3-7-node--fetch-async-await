// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  try {
    let data = await request("https://api.wheretheiss.at/v1/satellites/25544");
    let coordinates = JSON.parse(data);
    return {
      lat: coordinates.latitude,
      lng: coordinates.longitude,
    };
  } catch (error) {
    console.log(error);
  }
};

getIssPosition();
