//reduce
const result = [1, 2, 3, 4, 5].reduce((acc, num) => {
    console.log(acc);
    console.log(num);
    return acc + num;
});
console.log(result);