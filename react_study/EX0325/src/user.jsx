import { useState } from "react";

function User() {
    const [user, setUser] = useState({ name: '홍길동', age: 20 })

    // setUser({...user, age: 28}); // 화면 재랜더링 ...User() 새로 호출 (무한루프에 빠질 수도 있음.)
    const addAge = () => { setUser({ ...user, age: user.age+1 }) };

    return (
        <>
            {/* <h1>유저={JSON.stringify(user)}</h1> */}
            <h2>이름 = {user.name}</h2>
            <h2>나이 = {user.age}</h2>
            <button onClick={addAge}>나이증가</button>
        </>
    );
}

export default User;