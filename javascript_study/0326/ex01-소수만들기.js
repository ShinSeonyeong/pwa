// 소수는 1과 자기자신으로 나눴을 때 0이 되는 소수
// 2 3 5 7 11 13 17 ,,,

function solution(nums) {
    const myset = new Set(); // 중복되지 않는 배열
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            for (let k = 2; k < nums.length; k++) {
                if (i != j && j != k && k != i) {
                    const testValue = nums[i] + nums[j] + nums[k];
                    if (isPrime(testValue))
                        myset.add(testValue);
                }
            }
        }

    }
    console.log(myset);
    return myset.size;
}

// 소수로 나누었을 때 0이 떨어지면 소수가 아니라는 판별
function isPrime(item) {
    const prims = [2, 3, 5, 7, 11, 13, 17, 19];
    if (item == 3 || item == 3 || item == 5 || item == 7) return true;
    for (const element of prims) {
        if (item % element == 0) false;
    }
    prims.push(item);
    return true;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));