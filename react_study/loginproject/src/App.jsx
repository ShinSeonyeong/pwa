import "./App.css";
import axios from "axios";

function App() {
  const reqLogin = async () => {
    axios.defaults.withCredentials = true;
    try {
      const result = await axios.post("http://localhost:3000/api/login", {
        id: "admin",
        pw: "admin!!!!",
      });
      console.log("result", result);
    } catch (e) {
      console.log("e", e);
    }
  };
  return (
    <>
      <button onClick={reqLogin}>로그인</button>
    </>
  );
}

export default App;
