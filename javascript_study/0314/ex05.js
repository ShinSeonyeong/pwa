const before_incre = (function(){
    let num = 1;
    num++;
    console.log(num);
})();

const incre = (function(){
    let num = 1;
    return function(){
        num++;
        console.log(num);
    }
})();

incre();
incre();
incre();