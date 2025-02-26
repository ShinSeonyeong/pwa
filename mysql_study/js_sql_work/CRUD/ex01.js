// 키보드의 입력을 도와주는 라이브러리
const readline = require('readline/promises');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getInput() {
    const number = await r1.question('1.select 2.insert \n');
    
    if(number == '1'){
        console.log("1번 입력했다.");
    }else if(number =='2'){
        console.log("2번 입력했다")
    }else{
        console.log(`number =  ${number}`);
    }
    r1.close();
}

getInput();