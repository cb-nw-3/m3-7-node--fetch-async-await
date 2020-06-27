const form = document.querySelector("form");
const div = document.createElement("div");
document.body.append(div);

const handleSubmit = (event) => {
  event.preventDefault();
  const type = form.type.value;
  console.log(type);

  const data = {
    type,
  };

  fetch("/make-me-laugh", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const { status, error, joke } = data;
      if (status === "success") {
        div.innerHTML = joke;
      } else if (error) {
        console.log(error);
      }
    });
};

form.addEventListener("submit", handleSubmit);
