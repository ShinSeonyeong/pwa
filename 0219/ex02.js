// 프로그래머스 점의 위치 구하기
function solution(dot){
    if(dot[0]>0 && dot[1]>0) return 1;
    if(dot[0]<0 && dot[1]>0) return 2;
    if(dot[0]<0 && dot[1]<0) return 3;
    if(dot[0]>0 && dot[1]<0) return 4;
}