// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = JSON.parse(response);
    const data = {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.longitude,
    };
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getIssPosition();
