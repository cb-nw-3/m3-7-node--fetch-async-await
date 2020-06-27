// nothing here yet...
const parragrah = document.createElement('p');
parragrah.classList.add('joke');
document.body.appendChild(parragrah);

const form = document.querySelector('form');
form.addEventListener('submit', jokeSelection);

function jokeSelection(e) {
  e.preventDefault();
}
