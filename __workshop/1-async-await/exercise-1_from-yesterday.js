// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
let getUrl = "http://api.open-notify.org/iss-now.json";
// Returns the current position of the ISS
const getIssPosition = async () => {
  try {
    let res = await request(getUrl);
    let data = await JSON.parse(res);
    return {
      lat: data.iss_position.latitude,
      lng: data.iss_position.longitude,
    };
  } catch (error) {
    (err) => console.log("err: ", err);
  }
  // add code here (include a try/catch as well)
};

getIssPosition().then((result) => console.log(result));
