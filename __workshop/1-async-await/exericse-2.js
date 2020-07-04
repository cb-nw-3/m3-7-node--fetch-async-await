// Exercise 2
// ----------
const doublesLater = (num) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(2*num);
        }, 2000);
    })
}

const addPromise = async (num) => {
    try {
        const num1 = await doublesLater(num); 
        const num2 = await doublesLater(num1);
        const num3 = await doublesLater(num2);
        return num3;
    } catch (error) {
        console.log(error)
    }
}

addPromise(2)
.then((num) => {console.log(num)});