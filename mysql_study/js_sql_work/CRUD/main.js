const readline = require('readline/promises');
const { people_select } = require('../ex02/db/select');
const { people_insert } = require('../ex02/db/insert');
const people_delete = require('../ex02/db/delete');
const people_update = require('../ex02/db/update');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getInput() {
    while (true) {
        const number =
            await r1.question('1.select 2.insert 3.update 4.delete\n');

        if (number == '1') {
            console.log("1번 입력");
            people_select();
        } else if (number == '2') {
            console.log("2번 입력");
            const name = await r1.question("이름 입력: \n");
            const age = await r1.question("나이 입력: \n");
            console.log(`name ${name}`);
            console.log(`age ${age}`);
            people_insert(name, age);
        } else if(number =='3') {
            console.log("3번 입력");
            const id = await r1.question('id 입력: \n');
            const name = await r1.question("이름 입력: \n");
            const age = await r1.question("나이 입력: \n");
            console.log(age);
            people_update(id, name, age);
        } else if(number =='4') {
            console.log("4번 입력");
            const id = await r1.question('id 입력: \n');
            console.log(`id = ${id}`);
            people_delete(id);
        } else {
            console.log(`number =  ${number} 종료됩니다.`);
            break;
        }
    }

    r1.close();
}

getInput();