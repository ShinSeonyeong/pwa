const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});

// promise.then(res => {
//     console.log(res);
// });

const ret = await promise;
console.log(ret);