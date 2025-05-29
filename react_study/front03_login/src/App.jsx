import './App.css'
import axios from "axios";

function App() {

  const test = "test입니다."

  const login = async () => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {});
    console.log(res);
  }

  return (
      <>
        <h1>{`test=${test}`}</h1>
        <button onClick={login}>로그인</button>
      </>
  )
}

export default App
