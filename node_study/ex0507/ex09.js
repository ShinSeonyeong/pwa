const a = 10;
console.log(a || 3);
console.log(a ?? 3);

const c = null;

// null일경우 undefined 넣어줌.
console.log(c?.d);

// 에러발생 TypeError null 값에 d가 없어서 읽을 수 없음, 강제종료
console.log(c.d);
