// nothing here yet...
function displayJoke(event) {
    event.preventDefault();
    const value = document.getElementById("type").value

    fetch('/joke', {
        method: 'POST',
        // body: JSON.stringify({type: value}) assigning the type to something named the different 
        //data coming from form the type selected. EVERYTIME WE SEND TO BACKEND WE SHOULD STRINGIFY IT.
        body: JSON.stringify({ type: value }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => {
            console.log("*******INSIDE FETCH: ", json)
            document.getElementById("joke").innerHTML = json.data;
        });
}