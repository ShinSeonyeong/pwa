var a = true;
var b = false;

if (a && b){
    console.log("그리고 일 때는 출력되지 않는다.");
}

if (a || b){
    console.log("또는 일 때는 출력된다.");
}

var c = "hello world";

if(!c){
    console.log("true");
}else console.log("false");