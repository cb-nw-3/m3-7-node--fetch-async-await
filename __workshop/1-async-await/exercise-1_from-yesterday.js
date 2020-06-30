// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  // have to write 'await' for request when function is async.
  try {
    let apiResponse = await request("http://api.open-notify.org/iss-now.json");
    //convert response text to object
    let jsonApiResponse = JSON.parse(apiResponse);
    let dataToReturn = {
      latitude: jsonApiResponse.iss_position.latitude,
      longitude: jsonApiResponse.iss_position.longitude,
    };
    return console.log(dataToReturn);
  } catch (error) {
    return console.log(error);
  }
};

getIssPosition();
