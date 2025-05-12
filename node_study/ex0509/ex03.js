// 함수 안에서는 await 사용가능한데,
// 전역공간에서는 사용할 수 없다.
const aa = async () => {};
console.log(require);
console.log(__filename);
console.log(__dirname);
