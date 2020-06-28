// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

function grabData(data) {
  return {
    lat: Number(data.iss_position.latitude),
    lng: Number(data.iss_position.longitude)
  }
}
function parseData(data) {
  return JSON.parse(data)
}

// Returns the current position of the ISS
const getIssPosition = async () => {
  try {
    const data = await request('http://api.open-notify.org/iss-now.json')
    const parsedData = JSON.parse(data)
    const result = await grabData(parsedData)
    console.log(result)
    return result
  } catch(err) {
    console.log(err)
  }
}

getIssPosition();