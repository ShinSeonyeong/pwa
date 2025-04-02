// 로또번호 뽑기
// math.random() 1~46 중에서 중복되지 않는 숫자 6개 뽑기
// 0 < x < 1

/*
// 배열은 중복제거를 못함.
// set은 중복되면 덮어씌워지며 제거됨
const myset = new Set();
myset.add(1);
myset.add(1);
myset.add(2);
myset.add(5);

console.log(myset);
console.log(myset.size);
console.log([...myset]);
*/

setInterval(() => {
  const lottoNum = new Set();
  do {
    lottoNum.add(parseInt(Math.random() * 46) + 1);
  } while (lottoNum.size != 6);

  console.log([...lottoNum]);
}, 1000);
// for (let i = 0; i < 6; i++) {
//   console.log(parseInt(Math.random() * 46) + 1);
// }
