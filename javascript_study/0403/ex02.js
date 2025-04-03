// 숫자로 이뤄져있는지 확인
const isDigit = (str) => /^\d+$/.test(str);
console.log(isDigit("1234"));
console.log(isDigit("abcd"));
console.log(isDigit("12cd"));

// 문자로 시작하는지 확인
const isStartString = (str) => /^[A-Za-z]/.test(str);

console.log(isStartString("abc123"));
console.log(isStartString("123abc"));