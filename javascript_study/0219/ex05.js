// function countDown(n) {
//     for (var i = n; n > -1; n--) {
//         console.log(n);
//     }
// }

// countDown(10);

function countDown(n) {
    console.log("호출됨");
    if (n < 0) return;
    console.log(n);
    countDown(n - 1);
}
countDown(10);