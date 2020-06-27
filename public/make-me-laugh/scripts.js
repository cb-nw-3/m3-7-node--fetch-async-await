const updateJoke = (res) => {
    let jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = res;
}

const jokeFetch = async () => {
    let selection = userSelection.value;
    let res;
    switch (selection) {
        case 'dad':
            res = await fetch('/dadjoke').then(data => {
                return data.text()
                    .then(response => { return response })
            });
            updateJoke(res);
            break;
        case 'tronald':
            res = await fetch('/tronald').then(data => {
                return data.text()
                    .then(response => { return response })
            });
            updateJoke(res);
            break;
        case 'geek':
            res = await fetch('/geekjoke').then(data => {
                return data.text()
                    .then(response => { return response })
            });
            updateJoke(res);
            break;
    }

}

let userSelection = document.querySelector("#type");
userSelection.addEventListener("change", jokeFetch);
