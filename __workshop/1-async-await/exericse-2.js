// Exercise 2
// ----------
function doublesNumber(num) {
    setTimeout(function doubles() {
        console.log(num * 2);
        return num * 2;
    }, 2000);
}

const addPromise = async (num) => {
    const first = await doublesNumber(10);
    const second = await doublesNumber(20);
    const third = await doublesNumber(30);
    const sum = first + second + third;
    return sum;
};

addPromise(10).then((sum) => {
    console.log(sum);
});
