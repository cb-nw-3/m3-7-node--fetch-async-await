const request = require("request-promise");

const getGeekJoke = async () => {
	let options = {
		url: "https://geek-jokes.sameerkumar.website/api?format=json",
		method: "GET",
	};
	const joke = await request(options);
	const parsed = JSON.parse(joke);
	return parsed.joke;
};

getGeekJoke().then(console.log);
