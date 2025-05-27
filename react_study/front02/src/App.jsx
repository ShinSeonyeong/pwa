import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

const API_URL = import.meta.env.VITE_API_NODE_URL;

function App() {
  const hello = "Hello World";
  const [data, setData] = useState()


  const getRoot = async () => {
    // const result = await axios.get("http://localhost:8080");
    // console.log(result);
    // console.log(result.data);

    const {data, error} = await axios.get(`${API_URL}`);
    // console.log(data);
    // console.log(error);

    setData(data)

  }

  const daeguSub = () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker.ready.then((registration) => {
        console.log("service worker");
        registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              // 공개키 설정
              applicationServerKey: "BMJypUqPyy71zfr0ErUBVAVce6JE1AMbZzXa45C5dKSjjmcYnrcN9gBYtJu9xmam9OmoS1wfa51tKLigNvzRsIk",
            })
            .then((subscription) => {
              subscription.city = '대구';
              return fetch(`${API_URL}/subscribe`, {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                  .then((res) => {
                    console.log(res);
                    console.log('구독성공');
                  })
                  .catch((err) => {
                    console.log("구독실패");
                    console.log(err);
                  });
            })
            .catch((error) => {
              console.error("푸시 구독 실패:", error);
            });
      });
    }
  }

  return (
      <>
        <h1>{hello}</h1>
        <p>{data}</p>

        <button onClick={daeguSub}>대구구독</button>
        <button onClick={getRoot}>백엔드요청</button>
      </>
  )
}

export default App
