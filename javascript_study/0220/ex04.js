function test(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
    for (var i = 0; i < x; i++) {
        y();
    }

}

test(
    3,
    function () { console.log('yy') },
    { a: 10, b: 20 }
);