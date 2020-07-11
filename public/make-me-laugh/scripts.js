// const { get } = require("request");

const jokeSelectElement = document.getElementById("type");

const getJoke = async () => {
  const value = fetch(`${jokeSelectElement.value}`);
  const response = "";
  if (value === "dad") {
    response = await fetch("/dadJoke").then((data) => {
      return data.text().then((response) => {
        return response;
      });
    });
  } else if (value === "geek") {
    response = await fetch("/geekJoke");
    console.log(response);
  } else if (value === "tronald") {
    response = await fetch("/tronaldDumpJoke");
    console.log(response);
  }
};

const updateJoke = (res) => {
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = res;
};
