function solution(str_list) {
    let lindex = str_list.indexOf('l');
    let rindex = str_list.indexOf('r');

    if (lindex == -1) lindex = 21;
    if (rindex == -1) rindex = 21;

    if (lindex < rindex) {
        return str_list.slice(0, lindex);
    } else if (lindex > rindex) {
        return str_list.slice(rindex + 1);
    } else return [];
}

console.log(solution(["u", "u", "l", "l"]));