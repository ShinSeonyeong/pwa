add();
sub(); // typeError
console.log(add);
console.log(sub);

function add() {
    console.log("add 함수입니다.");
}

var sub = function add() {
    console.log("sub 함수입니다.");
}