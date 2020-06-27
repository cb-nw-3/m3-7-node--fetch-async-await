const rp = require("request-promise");

const getTronaldDump = async () => {
    try {
        const options = {
            uri: "https://api.tronalddump.io/random/quote",
            headers: {
                accept: "application/json",
            },
        };
        const resp = await rp(options);
        const parsed = JSON.parse(resp);
        console.log(parsed.value);
    } catch (error) {
        console.log(error);
    }
};
getTronaldDump();
