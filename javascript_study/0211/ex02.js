// for(; ;){
//     console.log("1 "+a);
//     a++;
//     if(a===20){
//         break;
//     }
// }

var a = 10;

while (true) {

    if (a === 15) {
        continue;
    }
    a++;
    console.log("1 " + a);
    if (a === 20) {
        break;
    }
}