// myapp/index.js
const arr = [1, 2, 3];

// arr.forEach(console.log);
// arr.forEach((item)=>{console.log(item)});
arr.forEach((item, index, items)=>{
    console.log(item+" "+index+" [ "+items+" ] ");
});

arr.forEach(console.log);