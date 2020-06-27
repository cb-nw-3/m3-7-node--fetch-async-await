// Exercise 2

const doublesLater = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (num * 2);
        }, 2000)
    });
}

//--------------------------------------------


const addPromise = async (num) => {
    try {
        const a = await doublesLater(10);
        console.log(a);
        const b = await doublesLater(20);
        console.log(b);
        const c = await doublesLater(30);
        console.log(c);
        return num + a + b + c;

    } catch (err) {
        return console.log('The error is:', err);
    }
}

addPromise(10).then((sum) => {
    console.log(sum);
});

// function addPromise(num){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10)
//             .then((a) => {
//                 doubleAfter2Seconds(20)
//                     .then((b) => {
//                         doubleAfter2Seconds(30).then((c) => {
//                             resolve(x + a + b + c);
//                         })
//                 })
//         })
//     });
// }







