// 프로그래머스 자릿수 더하기
function solution(n) {
    // n = String(n);
    n = n + '';

    const sum = n.split('')
                    .map(item => Number(item))
                    .reduce((a, b) => a + b, 0);
    // n = n.toString();
    // forEach(반환값없음), map(반환값 있음), filter, reduce
    // const arr = n.split('');
    // console.log(arr);

    // // arr값을 Number 처리해서 바꿔달라는 의미
    // const brr = arr.map(item => Number(item));
    // console.log(brr);

    // const sum = brr.reduce((a, b) => {
    //     console.log(a);
    //     console.log(b);
    //     return a + b;
    // }, 0);
    return sum;
}

const ret = solution(1234);
console.log(ret);