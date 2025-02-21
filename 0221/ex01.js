// 1. for
// 2. forEach(): 반환값이 없다.
// 3. Map(): 반환값이 있다.

// 1. for문
// const arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 2. forEach(), 1~5 각각 item에 하나씩 넣어서 console.log로 출력
// 배열, 객체 안에 있는 요소를 가지고 와서 어떤 동작을 수행하고 끝나는 함수
[1, 2, 3, 4, 5].forEach((item) => { console.log(item); return item;});

// 3. Map()
// 배열안에 있는 요소를 가지고 와서 어떤 동작을 수행하고 반환되는 값이 있는 함수
const result2 = [1, 2, 3, 4, 5].map((item) => { console.log(item); return `<li>${item}</li>`; });
console.log(result2.join('')); //배열형태 값 출력

const arr = ['배열을', '출력해', 'join은', '연결이야.'];
const str = arr.join();

console.log(arr);
console.log(typeof arr);
console.log(str);
console.log(typeof str);