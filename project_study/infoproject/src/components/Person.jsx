import React from "react";

// const Person = (props) => { 이 방법보단 아래 방법(객체분해)이 더 좋다.
const Person = ({name, age, position}) => {
    const myStyle = {
    position: "absolute",
      zIndex: 100,
      width: "200px",
      backgroundColor: "#fff",
  };
  if (position === "right") {
    myStyle.right = "0";
  } else {
    myStyle.bottom = "0";
  }

  return (
    <div style={{ ...myStyle }}>
      <h2>name = {name}</h2>
      <h2>age = {age}</h2>
    </div>
  );
};

export default Person;
