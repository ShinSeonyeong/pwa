const aa = (x, y) => { return { x, y } };
const result = aa(10, 20);
console.log(result);

const arr = [
    { name: 'LEE' },
    { name: 'KIM' },
    { name: 'JOO' }]
    .map((item, index, arr) => {
        console.log(`item: ${JSON.stringify(item)}`);
        console.log(`index: ${index}`);
        console.log(`arr: ${arr}`);
        return `<div>name = ${item.name}</div>`;
    });

console.log(arr);