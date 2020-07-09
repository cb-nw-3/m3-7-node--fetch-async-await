document
  .getElementById("form-joke")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    var x = document.getElementById("type").value;
    //select an element with the id type and accesses its value attribute
    // and stores it in variable x
    const obj = { body: { type: x }, method: "POST" };
    //see inserver the tfunction handlejoke that accesses the type from req obj
    const response = await fetch("/jokes", obj);
    // above calling the fetch method and  passing it parameters
    // one parameter is the /jokes address
    //the other is the request object. It defines method of request and the body of the request
    //THIS LINE BELOW IS AT BOTTOM OF SERVER.JS/BUSINESS SET
    //.post("/jokes", handleJoke)

    // put the response in json
    const { data } = await response.json();
    console.log(data);
    // put the result in the html document
    document.getElementById("selection").innerText = data;
  });
