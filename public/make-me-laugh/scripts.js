// nothing here yet...
const parragrah = document.createElement('p');
parragrah.classList.add('joke');
document.body.appendChild(parragrah);

const form = document.querySelector('form');
form.addEventListener('submit', jokeSelection);

async function jokeSelection(event) {
  event.preventDefault();
  const e = document.querySelector('select');
  const selected = e.options[e.selectedIndex].value;
  const address = `/getJoke?joke=${selected}`;
  const response = await fetch(address);
  if (response.ok) {
    const joke = await response.text();
    parragrah.innerText = joke;
  } else {
    alert('HTTP-Error: ' + response.status);
  }
}
