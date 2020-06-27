const { getDadJoke } = require('./exercise-3');
const { getTronaldDump } = require('./exercise-4');
const { getGeekJoke } = require('./exercise-5');

const handleJoke = async (req, res) => {
    const { type } = req.body;
    let jokeType = '';
    switch (type) {
        case 'geek':
            // console.log("geek")
            jokeType = await getGeekJoke();
            break;
        case 'tronald':
            // console.log("tronald")
            jokeType = await getTronaldDump();
            break;
        case 'dad':
        default:
            // console.log("dad")
            jokeType = (await getDadJoke()).joke;
            break;
    }

    res.status(200).json({ data: jokeType });
}

// handleJoke()
//     .then(data => console.log(data));
module.exports = { handleJoke }

