console.log("hello world");

console.log(users);

var users=[
  {userId:"홍길동", userAge:10},
  {userId:"박길동", userAge:20},
]

console.log(users);

var printUsers1 = `users[0] = Id = ${users[0].userId} Age = ${users[0].userAge}`;
var printUsers2 = `users[1] = Id = ${users[1].userId} Age = ${users[1].userAge}`;

document.getElementById(`app`).innerHTML= printUsers1 + printUsers2;

console.log(`b=${b}`);
var b;
