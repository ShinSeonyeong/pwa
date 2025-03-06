import { createInterface } from "readline/promises";
import { user_delete, user_insert, user_select, user_update }
    from "./db.js";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

while (true) {
    const result = await rl.question('선택해주세요 1.select 2.insert 3.update 4.delete\n');

    if (result === '1')
        user_select();
    else if (result === '2') {
        const name = await rl.question("이름은?");
        const email = await rl.question("이메일은?");
        user_insert(name, email);
    }
    else if (result === '3') {
        const email = await rl.question("이메일은?");
        const name = await rl.question("이름은?");
        user_update(name, email);
    }
    else if (result === '4') {
        const email = await rl.question("이메일은?");
        user_delete(email);
    }
    else {
        console.log("종료됩니다.");
        break;
    }
}

rl.close();