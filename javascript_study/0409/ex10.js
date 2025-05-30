function formatMemory(bytes) {
  // 1byte -> 1024
  // 1024 -> 1kbyte
  // 1024 -> 1mbyte
  // 1024m -> 1gigabyte
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

console.time("array");
// 📦 배열 기반
console.log("배열 기반");

// 컴퓨터 빠른 순서: cpu, gpu, 메모리, database
[10, 20, 30, 40, 50, 60, 70];

const bigArr = Array.from({ length: 100_000_000 }, (_, i) => i);
console.log(bigArr[bigArr.length - 1]); // 마지막 값 확인
console.log(bigArr.length); // 마지막 값 확인

const arrMem = process.memoryUsage();
console.log(arrMem);
console.log(`배열 heapUsed: ${formatMemory(arrMem.heapUsed)}`);
console.log("---------------------------\n");
console.timeEnd("array");

console.time("iter");
// 🔄 이터러블 기반
console.log("🔄 이터러블 기반");

const bigIterable = {
  [Symbol.iterator]() {
    let i = 0;
    const max = 100_000_000;
    return {
        // next() 함수 만났을 때 메모리 사용함.
      next() {
        if (i < max) return { value: i++, done: false };
        return { done: true };
      },
    };
  },
};

let last;
for (const x of bigIterable) last = x;
console.log(last); // 마지막 값 확인

const iterMem = process.memoryUsage();
console.log(`이터러블 heapUsed: ${formatMemory(iterMem.heapUsed)}`);
console.log("---------------------------");
console.timeEnd("iter");