const arr = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
];

const brr = [
    "<td>{ name: 'Alice', age: 20 }</td>",
    "<td>{ name: 'Bob', age: 25 }</td>",
    "<td>{ name: 'Charlie', age: 30 }</td>"
];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(obj => {
    console.log(obj);
})