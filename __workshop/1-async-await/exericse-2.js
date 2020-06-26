// Exercise 2
// ----------

// why does this work, when async and await don't?

const doublesLater = (num) => {
    let doubledNum = new Promise(resolve => {
        setTimeout(() => { resolve(num * 2) }, 2000);
    })
    return doubledNum;
}

const addPromise = async (num) => {
    let num1 = await doublesLater(10);
    let num2 = await doublesLater(20);
    let num3 = await doublesLater(30);
    return (num + num1 + num2 + num3);
}

addPromise(10).then(val => {
    console.log(val);
});