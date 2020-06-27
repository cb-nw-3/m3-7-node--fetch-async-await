// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  try {
    //obtain data
    let data = await rp("http://api.open-notify.org/iss-now.json");

    //format data into object and return only position
    let result = JSON.parse(data).iss_position;
    console.log(result);

    //return as value
    return result;
  } catch (error) {
    console.log(error);
  }
};

getIssPosition();
