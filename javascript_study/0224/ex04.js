function doArr(arr, callback) {
    console.log(arr); // [ 1, 2, 3 ]
    console.log(callback); // [Function (anonymous)]
    arr.forEach(item => {
        callback(item);
    })
    callback(10);
}

doArr([1, 2, 3], function (item) {
    console.log("test " + item); // test 1~3 10
});