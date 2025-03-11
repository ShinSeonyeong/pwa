function aa() {
    // vscode가 실행하기 전 에러를 알려줌
    // 개발자의 실수가 줄어든다
    'use strict'
    
    var a = 10;
    console.log(`a = ${a}`);

    delete a;
    console.log(`a = ${a}`);
}

aa();