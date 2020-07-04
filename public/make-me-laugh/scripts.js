let form = document.getElementById('type');

let jokeElem = document.createElement('h1');
jokeElem.id = 'jokeText';
//jokeElem.innerText = "Hello World";

document.body.appendChild(jokeElem);

console.log(jokeElem);

const updateJoke = (joke) => {
  let element = document.getElementById('jokeText');
  element.innerText = `${joke}`;
};

form.onchange = function (event) {
  let type = this.value;
  console.log(type);
  if (type === 'dad') {
    fetch('/joke/dad')
      .then((res) => {
        if (res.status == 200) {
          console.log('This is the response:', res);
          //window.location = "/joke/dad";
          return res.json();
        }
      })
      .then((data) => updateJoke(JSON.stringify(data.joke)));
  }
  if (type === 'geek') {
    fetch('/joke/geek')
      .then((res) => {
        if (res.status == 200) {
          console.log('This is the response:', res);
          //window.location = "/joke/dad";
          return res.json();
        }
      })
      .then((data) => updateJoke(JSON.stringify(data.joke)));
  }
  if (type === 'tronald') {
    fetch('/joke/trump')
      .then((res) => {
        if (res.status == 200) {
          console.log('This is the response:', res);
          //window.location = "/joke/dad";
          return res.json();
        }
      })
      .then((data) => updateJoke(JSON.stringify(data.joke)));
  }
};
