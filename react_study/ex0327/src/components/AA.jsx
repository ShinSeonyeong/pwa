import React from 'react'

// AA component이다.
function AA({aa, bb}) {
  console.log(props.aa);
  console.log(props.bb);

  // let aa = props.aa;
  // aa = 30;
  
  console.log("AA 랜더링 됨");

  // react에서 리턴값 작성할 때 한개의 tag <></>로 해야한다. 
  return (
    <>
      <div>AA</div>
      {/* <h1>props.aa = {props.aa}</h1>
      <h1>props.bb = {props.bb}</h1> */}
      <h1>aa = {aa}</h1>
      <h1>bb = {bb}</h1>
    </>
  )
}

export default AA