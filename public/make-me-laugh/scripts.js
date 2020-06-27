const jokeElement = document.querySelector(".jokeElement");

jokeElement.innerText = "no jokes yet";

function handleSubmit(event) {
  event.preventDefault();
  const data = { jokeType: type.value };
  console.log("scripts.js", data);

  fetch("/getJoke", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === "success") {
        jokeElement.innerText = res.joke;
      } else {
        console.log(res);
      }
    });
}
