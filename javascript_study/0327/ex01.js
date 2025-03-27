// slice
const arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(0, 3));
// console.log(arr.slice(2, 4));

function doA() {
    // 얕은복사
    const arr = [...arguments];
    const brr = arr;

    // 깊은복사
    // const crr = [...arr];
    // const drr = arr.slice(); // slice도 깊은 복사이다.

    // console.log('arr==brr');
    // console.log(arr === brr); // true (주소값이 같음)

    // console.log('arr==crr');
    // console.log(arr === crr);

    // console.log([...arguments]);

    // [...arguments]는 깊은복사이다. 
    // map은 새로운 것을 리턴하게 되면 배열로 반환한다.
    const result = [...arguments].map((item, index) => {
        console.log(item);
        console.log(`index = ${index}`);
        return `<div> item = ${item}</div>`
    })

    // result와 result1은 똑같이 작동한다. 
    const result1 = [...arguments].map((item, index) => (
        `<div> item = ${item}</div>` // 객체로 판단함. 함수도 객체이다.
    ));

    console.log(result1);
}

doA(1, 2, 3, 4, 5);