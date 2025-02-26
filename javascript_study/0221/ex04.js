const result = [1, 2, 3].filter(item => {
    console.log(item)
    return item % 2;
});

console.log(result);

const people = [
    { name: '신짱구', age: 20 },
    { name: '이훈이', age: 40 },
    { name: '이유리', age: 35 }
];

const result2 = people.filter(item => {
    console.log(item);
    return item.name.includes('유리');
});

console.log(result2);

const result3 = result2.map(item => {
    return `<li>name=${item.name}</li>
            <li>age=${item.age}</li>`;
}).join(" ");

console.log(result3);

const result4 = people
    .filter(item => item.name.includes('유리'))
    .map(item => `<li>name=${item.name}</li>
            <li>age=$item.age}</li>`)
    .join('');

console.log(result4);