Array.prototype.sum = function () {
  console.log(this);
  return this.reduce((a, b) => {
    return a + b;
  }, 0);
};

// sum을 Array.prototype.sum로 만들어서 공통적으로 사용할 수 있도록 함.
// 표준 빌트인 객체에 사용자 정의메서드를 추가하여 확장하는 것은 권장하지 않음. 
// 심벌로 추가하는게 좋음. 
const arr = [10, 20, 30];
console.log(arr.sum());

// shift: 앞의 값 삭제
arr.shift(5);

// unshift: 앞의 값 추가
arr.unshift(200);
arr.unshift(100);

console.log(arr);
