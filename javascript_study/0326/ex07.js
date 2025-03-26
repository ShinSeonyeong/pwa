const arr = [1, 2, 3, 4, 5, 6];
const test = arr.filter((item) => item != 3);

console.log(test);

const review = [
    { uid: '123123123', title: 'asdf', content: "" },
    { uid: '123456789', title: 'ddddd' },
    { uid: '987654321', title: 'aaaa' }
]

const filterReview =
    review.filter((item) => {
        console.log(`item = ${JSON.stringify(item)}`);
        return item.title.includes('a'); // a가 포함된 것 출력
    })

console.log(filterReview);