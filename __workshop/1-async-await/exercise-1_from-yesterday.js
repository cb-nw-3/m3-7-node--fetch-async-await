// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  const options = {
    method: "GET",
    uri: "http://api.open-notify.org/iss-now.json",
  };

  try {
  } catch (error) {
    console.log("Error: ", error);
  }

  const res = await request(options);
  const issLocation = JSON.parse(res);
  const output = {
    lat: issLocation.iss_position.latitude,
    lng: issLocation.iss_position.longitude,
  };
  console.log(output);
};

getIssPosition();
