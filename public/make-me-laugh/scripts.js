const joke = document.getElementById('type');
const submitButton = document.getElementById('submit');
//console.log(joke.value);
const pJoke = document.getElementById('joke');
submitButton.addEventListener('click', async (event) => {
    try {
        console.log(joke.value);
        event.preventDefault();
        const data = await fetch(`http://localhost:8000/make-me-laugh/${joke.value}`);
        const parsedData = await data.json();
        console.log(parsedData.joke);
        pJoke.innerText = parsedData.joke;
    } catch (error) {
        console.log(error)
    }
    
});

