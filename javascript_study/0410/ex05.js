// splice는 리턴되는 값없이 자기자신을 수정하는 함수.
const arr = [1, 4];
arr.splice(1, 0, ...[2, 3]);

console.log(arr);
