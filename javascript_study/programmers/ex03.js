// a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9

function solution(age) {
    var answer = '';
    var ageStr = age.toString();
    for(var i = 0; i <ageStr.length; i++){
        if(ageStr[i] === '0') answer += 'a';
        else if(ageStr[i] === '1') answer += 'b';
        else if(ageStr[i] === '2') answer += 'c';
        else if(ageStr[i] === '3') answer += 'd';
        else if(ageStr[i] === '4') answer += 'e';
        else if(ageStr[i] === '5') answer += 'f';
        else if(ageStr[i] === '6') answer += 'g';
        else if(ageStr[i] === '7') answer += 'h';
        else if(ageStr[i] === '8') answer += 'i';
        else if(ageStr[i] === '9') answer += 'j';
    }
    console.log(answer);
}

solution(23);
solution(51);
solution(100);