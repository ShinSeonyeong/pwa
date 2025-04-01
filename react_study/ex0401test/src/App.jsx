import { useState } from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
import TextInput from "./TextInput";

const url = "https://rnzhzcfovaqfsjfxorfq.supabase.co";
const pwd =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuemh6Y2ZvdmFxZnNqZnhvcmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjQ4MzAsImV4cCI6MjA1NTAwMDgzMH0.lC3jUF1yLH5RA0rMZ-ApWOuoTmWHQT7b1ihZXR50xhM";
const supabase = createClient(url, pwd);

function App() {
  const [count, setCount] = useState(0);

  const getReview = async () => {
    const res = await supabase.from("board").select("*");
    let getData = res.data;
    console.log(res.data);
  };

  return (
    <>
      <div style={{ border: "1px solid black", padding: 10 }}>
        <h2>count={count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
            localStorage.setItem("count", count + 1);
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            localStorage.setItem("count", count - 1);
          }}
        >
          감소
        </button>
        <button
          onClick={() => {
            setCount(count * 0);
            localStorage.setItem("count", count * 0);
          }}
        >
          리셋
        </button>
      </div>
      <div style={{ border: "1px solid black", marginTop: 10, padding: 10 }}>
        <TextInput></TextInput>
      </div>
      <div>
        <button onClick={getReview}>데이터 가져오기(콘솔창확인)</button>
      </div>
    </>
  );
}

export default App;
