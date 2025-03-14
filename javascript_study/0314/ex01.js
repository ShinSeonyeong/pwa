function solution(t, p) {
    let count = 0;

    for (let i = 0; i < t.length; i++) {
        const element = t.slice(i, i + p.length);
        // console.log(element);
        if (element.length === p.length) {
            if(Number(element) <= Number(p)){
                count++;
            }
        }
    }
    return count;
}
console.log(solution("10203", "15"));