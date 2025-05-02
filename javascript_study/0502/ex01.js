function solution(myString) {
    var answer = '';
    for (let i = 0; i < myString.length; i++) {
        answer += myString.toLowerCase() ? myString[i].toUpperCase() : myString[i];
        // if(myString[i] === myString[i].toLowerCase()){
        //     // console.log(myString[i]);
        //     answer += myString[i].toUpperCase();
        // }else{
        //     console.log(myString[i]);
        //     answer += myString[i];
        // }
    }
    console.log(answer);
    return answer;
}

solution("aBcDeFg")