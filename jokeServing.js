const request = require('request-promise');



const rp = require('request-promise');

let dadJokeOptions = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
        'Accept': 'application/json'
    },
    json: true // Automatically parses the JSON string in the response
};

let trumpQuoteOptions = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: {
        'Accept': 'application/json'
    },
    json: true // Automatically parses the JSON string in the response
};

let geekJokeOptions = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET',
    json: true // Automatically parses the JSON string in the response

}



const respondWithJokeOnly = async (req, res) =>
{
    console.log("respondWithJokeOnly called");
    console.log(req.body.type);

    if (req.body.type === 'dad')
    {
        try 
        {
            console.log("dad joke called");

            let joke = await rp(dadJokeOptions);
            console.log(joke);
            res.status(200).send(joke.joke);
        
        } catch (err) { console.log (err); }
    
    }

    if (req.body.type === 'geek')
    {
        try 
        {
            console.log("geek joke called");

            let joke = await rp(geekJokeOptions);
            res.status(200).send(joke.joke);

            console.log(joke);
        } catch (err) { console.log (err); }
    }

    if (req.body.type === 'tronald')
    {
        try 
        {
            let joke = await rp(trumpQuoteOptions);
            console.log(joke);
            res.status(200).send(joke.value);

        } catch (err) { console.log (err); }
    }
}


const serveUpJokeEJSPage = async (req, res) =>
{
    console.log("serve joke called");
    console.log(req.body.type);

    if (req.body.type === 'dad')
    {
        try 
        {
            console.log("dad joke called");

            let joke = await rp(dadJokeOptions);
            console.log(joke);
            res.status(200).render('pages/jokeResult', {joke:joke.joke});
            
        
        } catch (err) { console.log (err); }
    
    }

    if (req.body.type === 'geek')
    {
        try 
        {
            console.log("geek joke called");

            let joke = await rp(geekJokeOptions);
            res.status(200).render('pages/jokeResult', {joke:joke.joke});

            console.log(joke);
        } catch (err) { console.log (err); }
    }

    if (req.body.type === 'tronald')
    {
        try 
        {
            let joke = await rp(trumpQuoteOptions);
            console.log(joke);
            res.status(200).render('pages/jokeResult', {joke:joke.value});

        } catch (err) { console.log (err); }
    }

    



    // const newItem = {
    //     item: req.body.joke-select,
    //     urgent: req.body.urgent
    // }
    //addItem(req, res, newItem);
}



module.exports = {
    serveUpJokeEJSPage,
    respondWithJokeOnly
};