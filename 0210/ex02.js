
// 함수 선언문 (호이스팅 O)
hello(); // "Hello, world!"

function hello() {
    console.log("Hello, world!");
}
greet();
// 함수 표현식 (호이스팅 X)
const greet = function() {
    console.log("Hi there!");
};

 // "Hi there!"