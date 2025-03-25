// 장군개미 : 5
// 병정개미 : 3
// 일개미 : 1
function solution(hp) {
    var general_ant = parseInt(hp / 5);
    var soldier_ant = parseInt((hp % 5) / 3);
    var worker_ant = parseInt((hp % 5) % 3);
    return general_ant + soldier_ant + worker_ant;
}

console.log(solution(23));