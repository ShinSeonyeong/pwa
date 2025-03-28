const arr = ["aa", "bb", "cc"];

class AA {
    constructor(pre) {
        this.pre = pre;
    }
    add(arr) {
        // console.log(arr.map((item) => `${this.pre}-${item}`)); // return값과 결과 동일
        return arr.map((item) => `${this.pre}-${item}`);
    }
}

const aa = new AA("webket");
const prearr = aa.add(arr);
console.log(prearr)

/*
const result = arr.map((item) => {
    console.log(`item = ${item}`);
    return `webket- ${item}`;
})

console.log(result);
*/