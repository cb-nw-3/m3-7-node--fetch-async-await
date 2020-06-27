// nothing here yet...
function displayJoke(event) {
    event.preventDefault();
    const value = document.getElementById("type").value

    fetch('/joke', {
        method: 'POST',
        body: JSON.stringify({ type: value }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => {
            document.getElementById("joke").innerHTML = json.data;
        });
} 