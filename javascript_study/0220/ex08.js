// filter: Boolean반환값에 따라 필터링 하는 것

const test = [
    { name: "홍길동", gender: "남자" },
    { name: "이명화", gender: "여자" },
    { name: "김훈이", gender: "남자" },
].filter(obj => obj.gender === "남자")
console.log(test);

const result = [1, 2, 3, 4, 5].filter((item) => {
    console.log('test ' + item)
    // return true;
    return item % 2 == 0;
});
console.log(result);