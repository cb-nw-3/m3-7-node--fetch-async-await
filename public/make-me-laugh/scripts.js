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
  console.log("received", recivedObjectAfterRequest);
  const parcedResponse = await recivedObjectAfterRequest.json();
  console.log("parced response", parcedResponse);
  jokeDiv.innerText = `${parcedResponse.joke}`;
};
