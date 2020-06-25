// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  try {
    let result = await request("http://api.open-notify.org/iss-now.json");
    console.log(result);
    return result;
  } catch (err) {
    throw err;
  }
};

getIssPosition();
