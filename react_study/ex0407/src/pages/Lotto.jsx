import React, {useEffect, useRef, useState} from 'react';

function Lotto(props) {
    const [drwNo, setDrwNo] = useState(0);
    const [numbers, setNumbers] = React.useState([]);
    const [myNumbers, setMyNumbers] = React.useState([]);
    const inputRef = useRef(null);

    async function getMytNumbers() {
        // const arr = [...new Array(6)].map(
        //     (_, i) => Math.trunc(Math.random() * 46) + 1); // 1개의 랜덤숫자 출력됨

        const arr = new Set(); // 중복을 허용하지 않는 set 배열 선언
        do {
            arr.add(Math.trunc(Math.random() * 46) + 1);
        } while (arr.size !== 6)
        console.log(arr);
        setMyNumbers([...arr]);
    }

    async function getNumbers() {
        const inputValue = inputRef.current.value || 1166;
        console.log(inputValue);

        const text = await fetch(`/api/common.do?method=getLottoNumber&drwNo=${inputValue}`) // 로또 서버에서 회차 정보 가져오는 주소

        const res = await text.json(); // 가져온 데이터 text를 json으로 변경 / .then(text => text.json())

        console.log(res); // 변경 값 출력

        setNumbers(([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6])); // .then(json => setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6]))
        setDrwNo(res.drwNo);
    }

    useEffect(() => {
        getNumbers();
    }, []);
    return (
        <div>
            <h1>Lotto</h1>
            <h1>{drwNo}회</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={getNumbers}>조회</button>
            <div style={{display: 'flex', gap: '1rem'}}>
                {numbers.map(number => (
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: `rgb(${parseInt(Math.random() * 255)}, 
                                              ${parseInt(Math.random() * 255)},
                                              ${parseInt(Math.random() * 255)})`,
                        lineHeight: '3.8rem',
                        textAlign: 'center',
                        width: '4rem',
                        height: '4rem',
                        fontWeight: 'bold'
                    }}
                         key={number}>{number}</div>
                ))}
            </div>

            <button onClick={getMytNumbers}>추첨</button>
            <div style={{display: 'flex', gap: '1rem'}}>
                {myNumbers.map(number => (
                    <div style={{
                        borderRadius: '50%',
                        backgroundColor: `rgb(${parseInt(Math.random() * 255)}, 
                                              ${parseInt(Math.random() * 255)},
                                              ${parseInt(Math.random() * 255)})`,
                        lineHeight: '3.8rem',
                        textAlign: 'center',
                        width: '4rem',
                        height: '4rem',
                    }}
                         key={number}>{number}</div>
                ))}
            </div>
        </div>
    );
};

export default Lotto;