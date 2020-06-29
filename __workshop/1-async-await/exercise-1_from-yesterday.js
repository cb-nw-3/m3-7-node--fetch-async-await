// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
// const request = require("request-promise");

// // Returns the current position of the ISS
// const getIssPosition = async () => {
// 	// add code here (include a try/catch as well)
// };

// getIssPosition();

const request = require("request-promise");

// Returns the current position of the ISS
async function getIssPosition() {
	try {
		const response = await request("http://api.open-notify.org/iss-now.json");
		const issPosition = JSON.parse(response);
		const data = {
			lat: issPosition.iss_position.latitude,
			lng: issPosition.iss_position.longitude,
			// msg: issPosition.timestamp,
		};
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

getIssPosition();
