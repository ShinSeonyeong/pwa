import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/me").then((result) => {
      setLoginStatus(result?.data.status);
      setUser(result?.data.user);
    });
  }, []);

  const reqLogin = async () => {
    try {
      const result = await axios.post("http://localhost:3000/api/login", {
        id: "admin",
        pw: "admin!!!!",
      });
      console.log("result", result);
      if (result?.data.flag === "success") {
        axios.get("http://localhost:3000/api/me").then((result) => {
          setLoginStatus(result?.data.status); // 로그인 상태 업데이트
          setUser(result?.data.user); // 사용자 정보 업데이트
        });
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const reqLogout = async () => {
    axios.post("http://localhost:3000/api/logout").then(() => {
      setLoginStatus(false);
      setUser(null);
    });
  };

  return (
    <>
      {loginStatus ? (
        <>
          <h1>{user.id}</h1>
          <h1>{user.addr}</h1>
          <button onClick={reqLogout}>로그아웃</button>
        </>
      ) : (
        <button onClick={reqLogin}>로그인</button>
      )}
    </>
  );
}

export default App;
