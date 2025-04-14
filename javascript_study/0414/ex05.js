const uniq = [1, 3, 3, 5, 5].filter((v, i, self) => {
    console.log(`i=${i}`);
    console.log(`v=${v}`);
    console.log(`self=${self}`);
    console.log("self.indexOf(v)");
    console.log(self.indexOf(v));
    return self.indexOf(v) == i;
});

// filter true 이면 요소를 반환하고,
// filter false 이면 요소를 반환하지 않는다.

console.log(uniq);
console.log(new Set([1, 3, 3, 5, 5]))
