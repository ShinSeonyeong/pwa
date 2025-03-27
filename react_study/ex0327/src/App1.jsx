import React, { useState } from 'react'
import CC from './components/CC'

function App1() {

    const [style, setStyle] = useState({
        border: "1px solid rgb(98, 183, 233)",
        borderRadius: "20px",
        padding: "30px",
        color: "rgb(0, 0, 0)",
        backgroundColor: "rgb(233, 142, 218)"
    })
    return (
        <>
            <div>
                <div>App1</div>
                <button onClick={()=>setStyle({...style, color:"blue"})}>파란색</button>
                <button onClick={()=>setStyle({...style, color:"red"})}>빨간색</button>
                <button onClick={()=>setStyle({...style, color:"white"})}>하얀색</button>
            </div>
            <CC style={style}>
                <h1>자식태그111</h1>
                <p>Voluptate eligendi placeat delectus commodi similique est pariatur facilis quia perferendis, vel laudantium laboriosam, nihil sapiente velit vero, quas labore!</p>
            </CC>
            <CC style={style}>
                <h1>자식태그222</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </CC>
            <CC style={style}>
                <h1>자식태그333</h1>
                <p>Officia exercitationem optio labore explicabo ipsam, sunt ipsa quibusdam dolorum natus nulla.</p>
            </CC>
        </>
    )
}

export default App1