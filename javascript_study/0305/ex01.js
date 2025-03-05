function solution(bin1, bin2) {
    const arr = bin1.split('');
    const brr = bin2.split('');

    // arr 배열 순서 뒤집기: for (let i = arr.length - 1; i > -1; i--)
    let num1 = 0;
    for (let i = arr.length - 1, j = 0; i > -1; i--, j++) {
        num1 = num1 + arr[i] * (2 ** j); //2진수를 10진수로 변경
    }
    console.log(`10진수로 num1=${num1}`);

    let num2 = 0;
    for (let i = brr.length - 1, j = 0; i > -1; i--, j++) {
        num2 = num2 + brr[i] * (2 ** j); //2진수를 10진수로 변경
    }
    console.log(`10진수로 num2=${num2}`);

    let result = num1 + num2;
    console.log(`result=${result}`);

    let mod = ''; // 나머지

    do {
        mod = result % 2 + mod;
        console.log(`mod--=${mod}`);
        result = Math.floor(result / 2);
        console.log(`result--=${result}`);
    } while (result > 1);
    console.log(`result=${result}`);
    console.log(`mod=${mod}`);

    var answer = result + mod;
    if(bin1 ==='0' && bin2 ==='0')
        answer = '0';
    return answer;
}

const ret = solution("10", "11");
console.log(ret);