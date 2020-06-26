// Exercise 2
// ----------


//1. Write a function called `doublesLater` that returns a new Promise that doubles a num after 2 seconds.
const doubleLater = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2);
        }, 2000);
    });
}



//2. Here is a promise called `addPromise` that adds 3 numbers, one after another and then resolves to the sum of a number and the doubles of 3 other numbers (10, 20, 30). As you can see, it is quite the hellish situation. _it is also a convoluted and totally fabricated situation..._


function addPromise(num){
    return new Promise(resolve => {
        doubleAfter2Seconds(10)
            .then((a) => {
                doubleAfter2Seconds(20)
                    .then((b) => {
                        doubleAfter2Seconds(30).then((c) => {
                            resolve(x + a + b + c);
                        })
                })
        })
    });
}

const addPromise = async (num) => {

    const a = await doubleLater(10);
    const b = await doubleLater(20);
    const c = await doubleLater(30);

    return (num + a + b + c);
}

addPromise(10).then((sum) => {
console.log(sum);
});

