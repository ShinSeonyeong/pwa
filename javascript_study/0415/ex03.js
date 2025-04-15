const map = new Map();
const key = { key: 10 };

// map에 {key:10}=>20추가
map.set(key, 20);
console.log(map);

// map에 {key:10} 있는지 확인
console.log(map.has(key));

// map에 {key:10} 삭제
// map.delete(key); // Map(0) {}
map.delete({ key: 10 }); // Map(1) { { key: 10 } => 20 }
console.log(map);

// map에 NaN=>100 추가
map.set(NaN, 100);
console.log(map);

// map의 모든 내용 삭제
map.clear();
console.log(map);
