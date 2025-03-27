import React, { useState } from 'react'
import DD from './components/DD'

function App2() {
    const[count, setCount] = useState(0);
    console.log("App2 랜더링됨");
    const style = {
        border: "1px solid rgb(98, 183, 233)",
        borderRadius: "20px",
        padding: "30px",
        color: "rgb(0, 0, 0)",
        backgroundColor: "rgba(233, 142, 218, 0.3)"
    }
    return (
        <>
            <button onClick={() => { setCount(count + 1); }}>랜더링 이루어짐</button>
            <div>
                <div>App2</div>
            </div>
            <DD style={style}>
                <h1>자식태그111</h1>
                <p>Voluptate eligendi placeat delectus commodi similique est pariatur facilis quia perferendis, vel laudantium laboriosam, nihil sapiente velit vero, quas labore!</p>
            </DD>
            <DD style={style}>
                <h1>자식태그222</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </DD>
            <DD style={style}>
                <h1>자식태그333</h1>
                <p>Officia exercitationem optio labore explicabo ipsam, sunt ipsa quibusdam dolorum natus nulla.</p>
            </DD>
        </>
    )
}

export default App2