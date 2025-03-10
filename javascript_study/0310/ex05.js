function AA() { }
AA.doA() = function () {
    console.log("정적 메서드 doA");
}

const test = new AA();

AA.doA(); // 정적 메서드 호출
// test.doA(); // test 인스턴스 안에는 doA() 함수 없음.

// 개발자가 정적 메서드를 직접 생성하는 경우는 거의 없음.
// 자스에서 대표적인 정적 메서드는
// Math.ceil, Math.floor, Math.round 등이 정적에서도 Math 객체이다.
// ceil 정적메서드, floor 정적메서드, round 정적메서드
// const math = new Math()로 생성해서 사용하지 않고 Math.XXX로 바로 사용함. 