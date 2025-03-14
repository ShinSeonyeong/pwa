const x = 1;

function outerFunc(){
    const x = 10;
    // console.log(x);
    innerFunc();
}
function innerFunc(){
    console.log(x);
}
outerFunc();