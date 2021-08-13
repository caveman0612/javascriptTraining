

let async = new Promise((resolve, reject) => {
    let ran = Math.random();
    let answer = Math.round(ran)
    if (answer == 1) {
        resolve("equal to one")
    } else {
        reject("equal to zero")
    }
}) 

async.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})
