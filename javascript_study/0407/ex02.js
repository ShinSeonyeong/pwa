console.log(new Date());
console.log(new Date(2025, 2, 13));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

now.setMonth(2);
console.log(now);

now.setDate(0); // 그 달의 마지막 날 구하기
console.log(now);

console.log(Date.now()); // UTC 시간
console.log(new Date(Date.now())); // UTC -> 날짜 형식 변경
console.log(new Date());

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

console.log(now.toLocaleString());

const myDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
console.log(myDate);