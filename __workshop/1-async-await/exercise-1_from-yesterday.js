// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  try {
    const issLocationString = await rp(
      "http://api.open-notify.org/iss-now.json"
    );
    const issLocationParsed = JSON.parse(issLocationString);
    const latAndLngObject = issLocationParsed.iss_position;
    console.log(latAndLngObject);
    return latAndLngObject;
  } catch (err) {
    console.log(err);
  }
};

getIssPosition();
