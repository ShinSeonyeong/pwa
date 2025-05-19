import { useState } from "react";
import "./App.css";
import Person from "./components/Person";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

function App() {
  useKakaoLoader({
    appkey: "appkey",
  });
  const [test, setTest] = useState(null); // 초기값 null
  const print = "hello print";

  const mouseOver = () => {
    console.log("마우스가 들어왔습니다.");
    setTest({});
  };
  const mouseOut = () => {
    console.log("마우스가 나갔습니다.");
    setTest(null);
  };

  return (
    <>
      <Map
        onMouseOut={() => {
          // alert("마우스가 나갔습니다.");
        }}
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100%", height: "360px" }}
        level={3}
      >
        <MapMarker
          position={{ lat: 33.5564, lng: 126.7981 }}
          image={{ src: "/aa.jpg", size: { width: 30, height: 40 } }}
        >
          좌표설정
        </MapMarker>
      </Map>
      {test && (
        <>
          <Person name="홍길동" age={24} position="right"></Person>
          <Person name="박길동" age={28} position="bottom"></Person>
        </>
      )}
      <div
        style={{ position: "absolute", zIndex: 100, backgroundColor: "#fff" }}
      >
        {test && print}
      </div>
      <h1>대중교통정보서비스</h1>
      <div
        style={{ cursor: "pointer" }}
        onMouseOver={mouseOver} // 마우스 들어올 때
        onMouseOut={mouseOut} // 마우스 나갈 때
      >
        여기에 마우스 올리면 이벤트 작동
      </div>
    </>
  );
}

export default App;
