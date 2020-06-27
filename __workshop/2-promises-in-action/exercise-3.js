const request = require("request-promise");

const getDadJoke = async () => {
	const options = {
		uri: "https://icanhazdadjoke.com/",
		headers: {
			Accept: "application/json",
		},
	};
	const joke = await request(options);
	return JSON.parse(joke);
};
// call the joke
getDadJoke().then(console.log);

// try and get it so only the joke shows, not ID and status
