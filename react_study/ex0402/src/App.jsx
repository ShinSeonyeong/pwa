import {useEffect, useRef, useState} from 'react'
import './App.css'
import Child from "./components/child.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [aa, setAa] = useState(10);
    const myRef = useRef(null); //myRef 값을 담는 용도

    const aRef = useRef(0); //inputRef 포커스 가는 용도 및 값출력

    let a = 10;

    // 최초 한번만 호출, aa가 변경되면 또 호출해라는 의미
    useEffect(() => {
        console.log("부모 useEffect");
    }, [aa])

    return (
        <>
            <input type="number" ref={myRef}/>
            <button onClick={() => {
                console.log(myRef);
                myRef.current.focus();
                console.log(myRef.current.value);
            }}>포커스
            </button>

            <button onClick={() => {
                console.log(`a ${a}`)
                console.log(aRef);
                aRef.current = aRef.current + 1
            }}>ref변경 aRef={aRef.current}</button>

            <Child count={count}></Child>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <button onClick={() => setAa((aa) => aa + 1)}>
                aa is {aa}
            </button>
        </>
    )
}

export default App
