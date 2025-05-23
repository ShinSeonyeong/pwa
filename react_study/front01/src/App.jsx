import './App.css'
import axios from "axios";
import {useState} from "react";
import dbusers from './users.json'

function App() {

  const [users, setUsers] = useState(dbusers);
  const [supaUsers, setSupaUsers] = useState(dbusers);

  const getUsers = async (event) => {
    const result = await axios.get("http://localhost:8080") // cloudType: https://port-0-pwa01-manaeiwh8fe5b082.sel4.cloudtype.app/
    const {data, status} = result;
    setUsers(data);
  };

  const getSupaUser = async (event) => {
    const {data: {data, message}} = await axios.get("http://localhost:8080/supauser"); // 객체분해
    console.log(data);
    console.log(message);
    setSupaUsers(data);
  };

  return (
      <>
        <div>
          <h1 className={'text-3xl'}>
            안녕
          </h1>
          {
              users && users.map((user) =>
                  (
                      <div key={user.idx}>
                        <div>{user.id}</div>
                        <div>{user.password}</div>
                      </div>
                  )
              )
          }
          <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              onClick={(event) => {
                getUsers(event);
              }}>
            mariaDB 불러오기
          </button>
          <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              onClick={(event) => {
                getSupaUser(event);
              }}>
            supaDB 불러오기
          </button>
          {
              supaUsers && supaUsers.map((user) =>
                  (
                      <div key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.created_at}</div>
                        <div>{user.password}</div>
                      </div>
                  )
              )
          }
        </div>
      </>
  )
}

export default App
