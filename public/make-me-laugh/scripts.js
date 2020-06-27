// nothing here yet...

let jokeSelector = document.getElementById("type")
let jokeText = document.getElementById("joke-text")



var xhr = new XMLHttpRequest();
xhr.addEventListener("load", transferComplete);

function getNewJoke()
{
    // console.log(jokeSelector);
    var strUser = jokeSelector.options[jokeSelector.selectedIndex].value;
    console.log(strUser);

    console.log("hello");

    let type = "dave";

xhr.open("POST", 'http://localhost:8000/dropDownResponse/', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    type: strUser
}));

}

function transferComplete(evt)
{
    console.log("complete");
    console.log(evt.srcElement.response);
    jokeText.innerText = "Here is your joke : "+ evt.srcElement.response;
}

