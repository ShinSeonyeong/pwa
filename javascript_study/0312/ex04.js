// new 생성자 함수 사용
const circle = {
    redius: 5, // 변수
    getDimeter() { // 함수
        return 2 * this.redius;
    }
}
console.log(circle.getDimeter());

// 객체 리터럴 방법
function Circle() {
    this.radius = 5
    this.getDimeter = function () {
        return 2 * this.radius;
    }
}
const newCircle = new Circle();
console.log(newCircle.getDimeter());