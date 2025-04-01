import React, { useState } from "react";

function TextInput() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("2000");
  const today = new Date();
  const curYear = today.getFullYear();
  const change = (event) => {
    setText(event.target.value);
  };

  const birthNum = () => {
    console.log(curYear - text - 1);
    
  };

  return (
    <>
      <div>출생년도입력</div>
      <input value={text} onChange={change} />
      <button onClick={birthNum}>만나이계산</button>
      <p>당신의 만나이는: {curYear - text - 1}세 입니다.</p>
    </>
  );
}

export default TextInput;