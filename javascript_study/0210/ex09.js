var i = 0;
a:while (true) {
    while (true) {
        console.log(i);
        i++;
        if (i == 3) break a;
    }
}

console.log("for구문 시작");
i = 0;
for( ; ;){
    i++
    console.log(i);
    if(i==3) break;
}