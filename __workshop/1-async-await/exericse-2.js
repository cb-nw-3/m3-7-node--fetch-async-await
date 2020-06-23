// Exercise 2
// ----------
const doublesLater = (num) => {
    return new Promise((resolve, reject) => {
        console.log("TypeOf: ", typeof num, " Condition: ", (typeof num === 'number'))
        if (typeof num === 'number') {
            setTimeout(() => {
                resolve(num * 2);
            }, 2000);
        } else {
            reject('Error: It is not a number!')
        }
    })
}

const addPromise = async (num) => {
    try {
        const a = await doublesLater(10);
        const b = await doublesLater(20);
        const c = await doublesLater(30);
        console.log(num + a + b + c);
    } catch (err) {
        console.log(err);
    }
}

addPromise(10).then((sum) => {
    console.log(sum);
});