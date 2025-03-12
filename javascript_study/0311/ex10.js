function solution(s) {
    for (var i = 0; i < s.length; i++) {

        if (s.length != 4 || s.length != 6) {
            return false;
        }

        if (!isNaN(s[i])) {
            return true;
        } else return false;
    }
}

console.log(solution("123456445"));