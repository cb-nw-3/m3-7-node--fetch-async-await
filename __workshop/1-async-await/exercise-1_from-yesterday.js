// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const data = JSON.parse(response);
    const issPosition = {
      lat: data.iss_position.latitude,
      lng: data.iss_position.longitude,
    };
    console.log(issPosition);
    return issPosition;
  } catch (error) {
    console.log("error: ", error);
  }
};

getIssPosition();
