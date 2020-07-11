// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
const requestPromise = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  try {
    const resultString = await requestPromise(
      "http://api.open-notify.org/iss-now.json"
    );
    const resultObject = await JSON.parse(resultString);
    const data = {
      latitude: resultObject.iss_position.latitude,
      longitude: resultObject.iss_position.longitude,
    };
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getIssPosition();
