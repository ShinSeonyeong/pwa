function doA(...arr) {
    console.log(arr);

    arr.reduce((a, b) => {
        console.log('a=' + a);
        console.log('b=' + b);
        return a + b;
    }, 0);
}

doA(1, 2, 3, 4, 5);