import { useRef } from 'react';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Calcu from '@/components/Calcu';

function App() {
  let a = 10; // 10으로 초기화
  const useA = useRef(10); //메모리상에 참조되는 값이 있으니 그걸 가지고 오는 것. 화면 랜더링 될 때 변경

  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log('useEffect 호출');
    handleClick();
    // inputRef.current.focus();
  });

  return (
    <>
      <Calcu></Calcu>
      <h1>count = {count}</h1>
      <h1>a={a}</h1>
      <h1>useA={useA.current}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        카운트증가
      </button>
      <button
        onClick={() => {
          a = a + 1;
          useA.current = useA.current + 1;
          console.log('a, useA = ', a, useA.current);
        }}
      >
        a증가
      </button>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={handleClick}>포커스 이동</button>
    </>
  );
}

export default App;
