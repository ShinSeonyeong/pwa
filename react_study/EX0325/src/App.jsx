import { useState } from 'react'
import './App.css'
import User from './user';
import TextInput from './TextInput';

function doA(item) {
  return [item, function () { }]
}

function App() {
  // count 상태 추가
  const [count, setCount] = useState(0);

  let test = 0;

  // useState를 이용해서 값 변경하면 트리거가 일어남, 화면 ui가 재랜더링 된다.
  const [mystyle, mm] = useState({ border: '1px solid black' });

  // const $h1 = document.getElementById('test-h1');
  // $h1.innerHTML = "변경";

  const func = () => {
    test = 20;
    console.log(test);
    setCount(count + 20);

    mm({ border: '1px solid black', backgroundColor: `rgb(200,150, ${count})` });
  };

  return (
    <>
      <TextInput />
      <User />
      <h1>count = {count}</h1>
      <h1 id='test-h1'>test = {test}</h1>
      <button style={mystyle} onClick={func}>누름</button>
    </>
  )
}

export default App