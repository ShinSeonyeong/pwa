const arr = [1, 2, 3, 4, 5];
console.log(Math.max(arr));
console.log(Math.max(10, 20, 30, 40));

// bind는 함수호출 안되고, this를 정의 할 수 있다. 
// apply(this, 파라미타배열)
// call(this, 스프레드배열)
const apMax = Math.max.apply(null, arr);
console.log(apMax);

const caMax = Math.max.call(null, arr);
console.log(caMax);

const caMax2 = Math.max.call(null, 1, 2, 3, 4, 5);
console.log(caMax2);
