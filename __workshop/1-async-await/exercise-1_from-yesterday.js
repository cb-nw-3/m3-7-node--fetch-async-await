// Exercise 1 - `getIssPosition`
// -----------------------------
// require the 'request-promise' module.
const rp = require("request-promise");

const options = {
    uri: "http://api.open-notify.org/iss-now.json",
    headers: {
        "User-Agent": "Request-Promise",
    },
    json: true,
};

function getIssPosition() {
    return rp(options)
        .then(function (res) {
            return {
                lat: res.iss_position.latitude,
                lng: res.iss_position.longitude,
            };
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Returns the current position of the ISS
const getIss = async () => {
    try {
        const res = await getIssPosition();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

getIss();
