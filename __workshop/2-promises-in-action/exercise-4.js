const request = require("request-promise");

const getTronaldDump = async () => {
	const options = {
		uri: "https://tronalddump.io/random/quote",
		headers: {
			Accept: "application/json",
		},
	};
	const quote = await request(options);
	const parsed = JSON.parse(quote);
	return parsed.value;
};

getTronaldDump().then(console.log);

// return JSON.parse(quote.value) doesn't work but the parsed variable does...
