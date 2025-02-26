var a = 2;
var b;

switch (a) {
    case 1:
        b = "1입니다.";
        break;
    case 2:
        b = "2입니다.";
        break;
    case 3:
        b = "3입니다.";
        console.log("여기에 값이 들어오는지 확인3");
        break;
    default:
        console.log("여기에 값이 들어오는지 확인de");
        b = "기본";
}

console.log(b);