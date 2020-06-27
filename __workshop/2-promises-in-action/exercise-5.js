const rp = require("request-promise");

const getGeekJoke = async () => {
    const options = {
        uri: "https://geek-jokes.sameerkumar.website/api?json",
        headers: {
            "User-Agent": "Request-Promise",
        },
        json: true,
    };
    const response = await rp(options);
    console.log(response);
};
getGeekJoke();
