// const a = "abcdeaf";
// console.log(a.indexOf("a"));
// console.log(a.indexOf("e"));
// console.log(a.indexOf("g"));
// console.log(a.indexOf("a", 0));

function solution(str) {
    var answer = [];
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        let index = 0;
        console.log(element);
        while (true) {
            const findIndex = str.indexOf(element, index);
            if (findIndex == i) {
                if (index == 0)
                    answer.push(-1);
                break;
            } else {
                answer[i] = i - findIndex;
            }
            index++;
        }
    }
    return answer;
}

console.log(solution("banana"));