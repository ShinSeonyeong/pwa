import React, { useEffect, useState } from "react";
import AirTable from "../components/AirTable.jsx";
import { Reviews } from "../components/Reviews.jsx";
import { Button } from "antd";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { fetchCities } from "../../api/supadb.js";
import { fetchAqi } from "../../api/airapi.js";


const RootPage = () => {
  // supabase에서 가져온 도시좌표 데이터
  const [cities, setCities] = useState([]);

  // 클릭한 좌표의 미세먼지 초미세먼지 데이터
  const [aqiInfo, setAqiInfo] = useState({});
  const [city, setCity] = useState(null);

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
    libraries: ["clusterer", "services", "drawing"],
  });

  // supabase에서 cities 데이터 가져오기,
  useEffect(() => {
    fetchCities().then((data) => {
      setCities(data);
    });
  }, []); // 빈 배열을 넣어주면 컴포넌트가 처음 렌더링될 때만 실행됨

  // 좌표 클릭 시 해당 미세먼지 초미세먼지 데이터 가져와서 뿌려줌
  const clickAqi = (city) => {
    console.log(city);
    fetchAqi(city.latitude, city.longitude).then((data) => {
      setAqiInfo(data);
    });
  };

  const data = [
    {
      date: "2023-01-01",
      value: 100,
    },
    {
      date: "2023-01-02",
      value: 30,
    },
    {
      date: "2023-01-03",
      value: 5,
    },
    {
      date: "2023-01-04",
      value: 20,
    },
    {
      date: "2023-01-05",
      value: 65,
    },
  ];

  return (
    <>
      
      {/* <h1>미세먼지</h1> */}
      {/* <MyChart data={data}></MyChart> */}
      {/* <button onClick={() => setCities([...cities])}></button> */}
      <Map
        center={{ lat: 35.8693, lng: 128.6062 }}
        level={7}
        style={{ width: "100%", height: "50vh" }}
      >
        {cities.map((city) => (
          <MapMarker
            key={city.id}
            position={{ lat: city.latitude, lng: city.longitude }}
            onClick={() => {
              clickAqi(city); // 미세먼지 데이터 정보 가져오기
              setCity(city); // 해당좌표 클릭해서 하위 컴포넌트인 Reviews에 city pros로 정보 넘거주는 역할
            }}
          ></MapMarker>
        ))}
      </Map>

      {/* city 데이터 변경 시 자동으로 하위컴포넌트 조절 */}
      <Reviews city={city} aqi={aqiInfo.aqi}></Reviews>
      {/* {AirTable({...aqiInfo})} 이 방식과 <AirTable {...aqiInfo}></AirTable> 방식이 동일하다 */}
      <AirTable {...aqiInfo}></AirTable>
    </>
  );
};

export default RootPage;
