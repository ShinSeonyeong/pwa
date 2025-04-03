import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { signUp } from "../jslib/supa";
import Swal from "sweetalert2";
// import { supabase } from "../jslib/supa";

function User() {
  const { userId } = useParams();
  console.log(userId);

  // useEffect(() => {
  //   supabase.auth.getUser();
  // }, []);
  
  const sign = async () => {
    const { data, error } = await signUp("email_addr@naver.com", "password1234");
    console.log(error);
    Swal.fire({
      title: `${data}`,
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };
  return (
    <>
      <div>User</div>
      <button onClick={sign}>회원가입</button>
    </>
  );
}

export default User;
