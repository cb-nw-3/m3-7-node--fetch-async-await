# 3.7.0 - Review Promises

---

```js
const pauseFunction = () => {
  return new Promise(function (resolve, reject) {
    console.log("entering the promise(d) land");
    resolve("resolve");
    console.log("...in limbo...");
    reject("reject");
    console.log("shuffling off...");
  });
};
```

---

Let's make it pause now...

```js
const pauseFunction = (sec) => {
  return new Promise(function (resolve) {
    console.log(`${sec}s pause`);
    console.log("entering the promise(d) land");
    resolve("resolve");
    console.log("...in limbo...");
    reject("reject");
    console.log("shuffling off...");
    setTimeout(() => resolve("resolve"), sec * 1000);
  });
};
```

---

<img src='./assets/promise.png' style='width:100%;' />

[Next lecture: Async / Await](../lecture-1-async-await)
