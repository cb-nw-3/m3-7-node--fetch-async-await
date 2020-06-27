const rp = require("request-promise");

const getDadJoke = async () => {
    const options = {
        uri: "https://icanhazdadjoke.com/",
        accept: "application/json",
        json: true,
    };
    const resp = await rp(options);
    const parsed = JSON.parse(resp);
    console.log(resp);
};
getDadJoke();
