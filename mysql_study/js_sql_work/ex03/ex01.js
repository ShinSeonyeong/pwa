const aa = require('randomcolor');
const readline = require('readline/promises');

// console.log(process);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getInput() {
    const name = await rl.question("이름 입력해봐요");
    console.log(`name = ${name}`);
    rl.close();
};

getInput();

// rl.question('이름입력해주세요\n', name => {
//     console.log(`name = ${name}`);
//     rl.close();
// });

// console.log(readline);
// console.log(aa());