import { ordersMInsert, usersMInsert, usersSelectByEmail } from "./db.js";

// usersMInsert();
const userid = await usersSelectByEmail('qqq@gmail.com')
ordersMInsert(userid);