var x = 10;
// var supabase = {
//     clientCreate: function (dbUrl, dbPassword){
//         console.log('호출됨.');
//     }
// }


async function insertData(dbCon) {
    await dbCon.from('test').insert([{comment: '데이터 넣었어요.', writer: '홍단무'}]);
}

async function selectData(dbCon) {
    const res = await dbCon.from('test').select('*');
    console.log(res);
    return res.data;
}