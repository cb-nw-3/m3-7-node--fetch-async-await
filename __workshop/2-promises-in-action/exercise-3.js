const request = require("request-promise");

const getDadJoke = async () => {
	const options = {
		uri: "https://icanhazdadjoke.com/",
		headers: {
			Accept: "application/json",
		},
	};
	const joke = await request(options);
	const parsed = JSON.parse(joke);
	return parsed.joke;
};
// call the joke
getDadJoke().then(console.log);

