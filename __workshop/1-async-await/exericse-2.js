// Exercise 2
// ----------

function doublesLater(num) {
	return new Promise((resolve, reject) => {
		if (typeof num !== 'number') {
			reject("Input a number");
		} else {
			setTimeout(() => {
				resolve(num * 2);
			}, 2000);
		}
	});
}

doublesLater(5).then(console.log).catch(console.log);

async function addPromise(num) {
    
    const a = await doublesLater(10)
    const b = await doublesLater(20)
    const c = await doublesLater(30)
    return num + a + b + c
}

addPromise(10).then(console.log)