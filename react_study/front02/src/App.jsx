import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

const API_URL = import.meta.env.VITE_API_NODE_URL

function App() {
  const [test, setTest] = useState("안녕 TEST");

  const getRoot = async () => {
    // console.log("get Root");
    // const result = await axios.get(API_URL);
    // console.log(result.data);

    const {data, error} = await axios.get(`${API_URL}`);
    console.log(data);
    console.log(error);
    setTest(data);
  }

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      console.log("Service worker");
      navigator.serviceWorker.ready.then((registration) => {
        console.log("service worker ready");
        registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              // 공개키 설정
              applicationServerKey: "BMJypUqPyy71zfr0ErUBVAVce6JE1AMbZzXa45C5dKSjjmcYnrcN9gBYtJu9xmam9OmoS1wfa51tKLigNvzRsIk",
            })
            .then((subscription) => {
              return fetch(`{API_URL}/subscribe`, {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                  "Content-Type": "application/json",
                },
              });
            })
            .catch((error) => {
              console.error("푸시 구독 실패:", error);
            });
      });
    }
  }, []);

  return (
      <>
        <h1>Hello React</h1>
        <p>Hello React! + {test}</p>
        <button onClick={() => {
          getRoot();
        }}>백앤드요청
        </button>

      </>
  )
}

export default App
