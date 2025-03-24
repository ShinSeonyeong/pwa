import { useState } from 'react'
import './App.css'
import BB from './BB';


function CC() {
  return (
    <div><h1>CC</h1></div>
  )
}

function App() {
  const [aa, setAA] = useState('useStateAA');
  const doClick = () => setAA(aa + "!!");

  const test = "안녕하세요. 테스트 입니다. "

  return (
    <>
      <CC className=""></CC>
      <CC></CC>
      <CC></CC>
      <BB></BB>
      <BB></BB>
      <BB></BB>
      <h2 className='title'>{test}</h2>
      <h1 id='aa'> 안녕{aa}</h1>
      <button onClick={doClick}>버튼</button>
    </>
  )
}

export default App