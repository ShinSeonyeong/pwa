const mydate = new Date('2025/04/01');
console.log(mydate);
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleString('ko-kr'));
console.log(mydate.toDateString());
console.log(mydate.toLocaleTimeString());

setInterval(()=>{
    console.log(new Date());

}, 1000)
