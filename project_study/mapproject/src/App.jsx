import {useEffect, useState} from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import {Card, Space} from "antd";
import AirTable from "./components/AirTable.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [cities, setCities] = useState([]);
    const [aqiInfo, setAqiInfo] = useState({});

    const [loading, error] = useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
        libraries: ["clusterer", "services", "drawing"]
    });

    // supabase에서 cities 데이터 가져오기
    useEffect(() => {
        fetchCities()
            .then(data => {
                setCities(data);
            });
    }, []); // 빈 배열을 넣어주면 컴포넌트가 처음 렌더링될 때만 실행됨

    // 좌표 클릭 시 해당 미세먼지 초미세먼지 데이터 가져와서 뿌려줌
    const clickAqi = (city) => {
        console.log(city);
        fetchAqi(city.latitude, city.longitude).then(data => {
            setAqiInfo(data);
        });
    }

    return (
        <>
            <h1>Hello</h1>
            <button onClick={() => setCities([...cities])}></button>
            <Map center={{lat: 35.8693, lng: 128.6062}} level={7}
                 style={{width: '100%', height: '80vh'}}>
                {cities.map((city) => (
                    <MapMarker key={city.id}
                               position={{lat: city.latitude, lng: city.longitude}}
                               onClick={() => {
                                   clickAqi(city)
                               }}
                    >

                    </MapMarker>
                ))}
            </Map>
            <AirTable {...aqiInfo}></AirTable>
        </>
    )
}

export default App
