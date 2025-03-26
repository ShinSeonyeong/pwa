import { useState } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js';

const url = "https://zgrjjnifqoactpuqolao.supabase.co";
const pwd = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmpqbmlmcW9hY3RwdXFvbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0NTgsImV4cCI6MjA1NjgyMzQ1OH0._Vl-6CRKdMjeDRyNoxlfect7sgusZ7L0N5OYu0a5hT0"
const supabase = createClient(url, pwd);

function App() {

  const [count, setCount] = useState(0);

  const [data, setData] = useState([
    { review_num: 1, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "홍길동", title: "제목1", review_txt: "리뷰입니다11." },
    { review_num: 2, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "박길동", title: "제목2", review_txt: "리뷰입니다22." },
    { review_num: 3, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3", name: "이길동", title: "제목3", review_txt: "리뷰입니다33." }
  ]);

  // const retData = data.map(item=>{
  //   return `<li>내용</li>`
  // })
  // console.log(retData);

  console.log("App 랜더링");

  const getReview = async () => {
    const res = await supabase.from('review').select();
    setData(res.data);
    console.log(res);
  }

  return (
    <>
      <h1>count = {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>count 증가</button>
      <button onClick={getReview}>review 데이터 가져오기</button>
      {
        data.map(item => (
          <div key={item.review_num}>
            <div><h2>게시글{item.title}</h2></div>
            <div>{item.review_txt}</div>
            <div>작성자{item.name}</div>
          </div>
        ))
      }

    </>
  )
}

export default App
