import React, { useState } from 'react'

export default function TextInput() {
    const [text, setText] = useState("초기값");
    const change = (event) => {
        // console.log(event);
        setText(event.target.value); // 이렇게 해야 input 값 작성할 수 있다.
    }
    const amove = () => {
        // a태그의 기본동작: 페이지 이동이다.
        event.preventDefault(); // 태그의 기본동작을 막는다.
        event.stopPropagation(); // 이벤트 두 개 걸리면 작동 안 되게 막는것.
        console.log("a버튼 누름");
    }

    const doDiv = () => {
        console.log("div 누르면 출력됨");
    }

    // onChange, useState
    return (
        <div onClick={doDiv}>
            <h1>TextInput</h1>
            <input value={text} onChange={change} />
            <a href="http://www.naver.com" onClick={amove}>이동</a>
        </div>
    )
}
