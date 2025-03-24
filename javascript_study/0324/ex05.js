// function doA(dd) {
//     console.log(dd.a);
//     console.log(dd.b);
// };

// {a, b}로 선언하게 되면 dd 안 써도 됨. (객체 분해)
function doA({a, b}) {
    console.log(a);
    console.log(b);
};

doA({ a: 50, b: 20 });

// function doB(arr){
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
// }

// [a,b,c]로 사용하면 arr[0]으로 안 써도 됨. (배열 분해)
function doB([a, b, c], cc) {
    console.log(a);
    console.log(b);
    console.log(c);
    // console.log(cc()); 
    cc();
}

doB([10, 20, 30], function(){console.log("함수")});