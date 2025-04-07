const arr = [10, 5, 3, 2, 6, 1];

// a>b: 양수반환
// a==b: 0 반환
// a<b: 음수반환
console.log(arr.sort((a, b) => b - a));

const brr = ["orange", "apple", "test", "water", "banana"];
// 문자열 길이대로 정렬
// console.log(brr.sort((a, b) => a.length - b.length)); 
console.log(brr.sort((a, b) => b.localeCompare(a))); 

const crr = ["한국", "나무", "테스트", "가나다"];
console.log(crr.sort());
