// find id가 2번인 요소를 찾음
// findIndex id가 2번인 index를 찾는 것
// filter로도 가능

const myUsers = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
];

const result =
    myUsers.find((item) => {
        // console.log(item);
        return item.id == 2;
    });
console.log("=========retult=========");
console.log(result);

const resultIndex =
    myUsers.findIndex((item) => {
        // console.log(item);
        return item.id == 2;
    });
console.log("=========retult=========");
console.log(resultIndex);