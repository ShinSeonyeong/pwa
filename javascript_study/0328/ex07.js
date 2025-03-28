const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((a, b, index, values) => {
    console.log(`a=${a} b=${b} index=${index} values=${values}`);
    return a + b;
})

console.log(`result=${result}`);

// 고차함수
// 1. sort(정렬)
// 2. forEach(반환값없이 수행) 
// 3. map(요소 변경해서 반환)
// 4. reduce(하나의 값으로 변경해서 반환)
// 5. filter(true, false 배열 반환)