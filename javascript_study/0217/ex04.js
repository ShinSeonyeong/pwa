const a = {aa:10, bb:20};
const b = {bb:10, cc:20};

const ab = {...a, ...b};

console.log(ab);

a.aa = 5;
console.log(a);
console.log(ab);