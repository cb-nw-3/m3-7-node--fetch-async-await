# Module 3 - Node day 7

## ASYNC / AWAIT

### Exercise 0 to Exercise 2

See the README in the `1-async-await` folder

---

## Promises in action

### Exercise 3 to Exercise 5

See the README folder in `2-promises-in-action`.

---

## Server Endpoints

- Create server endpoints for the these functions. We will be returning jokes to requests that our future frontend will make.
- You can name it whatever you like.
- You will use that endpoint from the Frontend `/make-me-laugh` page

## The Frontend

- Write the JS required to capture the user's joke choice.
- Use `onchange` to make it dynamic.
- Once a user selects a joke-type, a random joke should appear on the page.
- If the user re-selects, then the joke changes.
- To get the joke, contact your server ant the endpoint you created and `request` the type of joke the user wants to see.

questions to ask: Fetch sends a body in a stringified json format. Why don't we need to parse it in the server ?

question: I saved the response from my fetch() in a variable named result. The response to my fetch request is a json object. However, when I do JSON.parse(result) i get unexpected token o in json at position 1. but when I do result.json(), i get the json object that I sent back in the server. What is the difference ?
