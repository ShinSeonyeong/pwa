function aa(){
    // console.log(this);
    console.log(new.target);
}

aa();
console.log("========================================");
new aa();