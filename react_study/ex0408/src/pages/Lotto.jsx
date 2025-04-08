import axios from "axios";
import React, { useEffect, useState } from "react";

function Lotto() {
  const [lottoNumbers, setLottoNumbers] = useState([1, 2, 3, 4]);
  const [drwNo, setDrwNo] = useState(1163);

  async function getLottoNumbers() {
    // js 내장함수 fetch
    // axios 라이브러리는 외장모듈이기에 import 해줘야 함.
    const result = await axios.get(
      `/api/common.do?method=getLottoNumber&drwNo=${drwNo}`
    );
    console.log(result.data);

    setLottoNumbers([
      result.data.drwtNo1,
      result.data.drwtNo2,
      result.data.drwtNo3,
      result.data.drwtNo4,
      result.data.drwtNo5,
      result.data.drwtNo6,
    ]);
  }

  useEffect(() => {
    getLottoNumbers();
  }, []);

  return (
    <>
      <div>
        <h2>Lotto {drwNo} 회차</h2>
      </div>
      <div>
        {lottoNumbers.map((num) => (
          <span key={num} className="lotto">
            {num}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            setDrwNo(drwNo - 1);
          }}
        >
          이전
        </button>
        
        <button
          onClick={() => {
            setDrwNo(drwNo + 1);
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default Lotto;
