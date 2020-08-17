// nothing here yet...

const selectedJokeType = document.querySelector("#type");
const jokeDiv = document.querySelector("#joke");

const onSubmit = async (event) => {
  event.preventDefault();
  const data = {
    selectedJokeType: selectedJokeType.value,
  };

  const receivedObjectAfterRequest = await fetch("/getjoke", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log(receivedObjectAfterRequest);
  const parsedResponse = await receivedObjectAfterRequest.json();
  jokeDiv.innerText = `${parsedResponse.joke}`;
};
