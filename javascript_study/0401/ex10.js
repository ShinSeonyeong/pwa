// 요일 만드는 함수
function gety1(cDate) {
    const y1 = {
        0: '일요일',
        1: '월요일',
        2: '화요일',
        3: '수요일',
        4: '목요일',
        5: '금요일',
        6: '토요일'
    }
    return y1[cDate.getDay()];
}

const mydate = new Date();
mydate.getDay();
console.log(`${mydate.getFullYear()}년 ${mydate.getMonth()}월 ${mydate.getDate()}일 (${gety1(mydate)})
${mydate.getHours()}시 ${mydate.getMinutes()}분 ${mydate.getSeconds()}초`);