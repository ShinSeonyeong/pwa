import {useState} from 'react'
import './App.css'
import Aa from "./Components/AA.jsx";
import MyTime from "./Components/MyTime.jsx";

function App() {
    const [style, setStyle] = useState('ON');
    const [showAA, setShowAA] = useState(false);
    return (
        <>
            <MyTime></MyTime>
            {style === "ON" ?
                (<h1 style={{backgroundColor: 'rgb(100,200,100)'}}>on = {style}</h1>)
                : (<h1 style={{backgroundColor: 'rgb(200,100,100)'}}>off = {style}</h1>)
            }
            <div>
                <button onClick={() => setStyle(style === "ON" ? "Off" : "ON")}>toggle</button>
                {showAA && <Aa/>}
                <button onClick={() => setShowAA(!showAA)}>Toggle</button>
            </div>
        </>
    )
}

export default App
