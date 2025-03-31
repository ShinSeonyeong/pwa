import React, {useEffect} from 'react';

function Aa(props) {
    let count = 0; // 콜백변수가 되는 것
    useEffect(() => {
        console.log("AA 컴포넌트 마운드됨(생성)");
        const myInter = setInterval(() => {
            console.log(`count = ${count++}`);
        }, 1000)

        return () => {
            console.log("AA 컴포넌트 마운드됨(삭제)");
            clearInterval(myInter);
        }
    }, []);
    return (
        <div>
            <h1>AA Component</h1>
        </div>
    );
}

export default Aa;