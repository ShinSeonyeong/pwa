function solution(s1, s2) {
    var count = 0;
    s1.forEach(element => {
        // console.log(element);
        s2.forEach(s2_element => {
            // console.log(s2_element);
            if(element === s2_element){
                count ++;
            }
        })
    });

    return count;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(solution(["n", "omg"], ["m", "dot"]));