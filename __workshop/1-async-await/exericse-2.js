// Exercise 2
// ----------





const doubleTheNumber = (num) => {
    myPromise = new Promise((resolve, reject) => {

        if (typeof num === 'number')
        {
            let doubleLaterTimer = setTimeout(delayedFunction, 2000);

            function delayedFunction() {
                resolve(num*2)
            }

        }

        else {
            reject(num + " is not a number!")
        }
    })
    return myPromise;
}


const doubleTheNum = async (num) => {

    try 
    {
        const doubled = await doubleTheNumber(num);
        console.log(doubled);
    } catch (err)
    {
        console.log(err);
    }
}

doubleTheNum(15);
console.log("this should fire first");
