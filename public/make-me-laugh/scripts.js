// nothing here yet...

const selectedJokeType = document.querySelector("#type");
const jokeDiv = document.querySelector("#joke");

const onSubmit = async (event) => {
  event.preventDefault();
  const data = {
    selectedJokeType: selectedJokeType.value,
  };

  const recivedObjectAfterRequest = await fetch("/getjoke", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const parcedResponse = await recivedObjectAfterRequest.json();
  jokeDiv.innerText = `${parcedResponse.joke}`;
};
