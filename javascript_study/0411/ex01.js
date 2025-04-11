const obj1 = { aa: 10, bb: 20 };
const obj2 = { aa: 40, cc: 30 };

const result = { ...obj2, ...obj1 };
const result2 = { ...obj1, ...obj2 };
console.log(result);

const data = [
  { date: "2025/02/22", todo: "공부하기" },
  { date: "2025/02/23", todo: "놀기" },
];

console.log([...data, { date: "2025/02/24", todo: "영화보기" }]);
