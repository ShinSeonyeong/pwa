function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    const s_s = s.split(" ");
    for (let i = 0; i < s_s.length; i++) {
        // console.log(`s_s[i] ${s_s[i]} length = ${s_s[i].length}}`);
        const splitStr = s_s[i];
        for (let j = 0; j < splitStr.length; j++) {
            if (j % 2 == 0) {
                answer += splitStr[j].toUpperCase();
            } else {
                answer += splitStr[j];
            }
        }
        if ((s_s.length - 1) != i) {
            answer += " ";
        }
    }
    return answer;
}

console.log(solution("read the explanation carefully"));