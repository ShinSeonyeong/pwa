const fn1 = function doA(num) {
    console.log('doA' + num);
    return num + 1;
}

const obj = {
    fn1,
}

// obj.fn1();

function makeFn1(fff) {
    let num = 0;
    return function () {
        num = fff(num);
        console.log(num);
    };
}

const aaa = makeFn1(obj.fn1);
// console.log(aaa);
aaa();