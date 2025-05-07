import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk"
import {message} from "antd";
import axios from "axios";

function App() {
    const [count, setCount] = useState(0)
    const [cities, setCities] = useState([
        {id: 0, name: "대구", lat: 35.8714, lng: 128.6014},
        {id: 1, name: "달서구", lat: 35.8296, lng: 128.5328},
        {id: 2, name: "중구", lat: 35.8693, lng: 128.6062},
        {id: 3, name: "남구", lat: 35.8467, lng: 128.5971},
        {id: 4, name: "동구", lat: 35.8867, lng: 128.6350},
        {id: 5, name: "수성구", lat: 35.8588, lng: 128.6305},
    ])

    // 카카오 api key 설정
    useKakaoLoader({
        appkey: 'ff9dcf8f19b4f006d66dd2ddf6e26998',
    })

    // 좌표 클릭 시 해당 미세먼지 초미세먼지 데이터 가져와서 뿌려줌
    const getAqi = () => {
    }

    return (
        <>
            <h1>Hello</h1>
            <Map center={{lat: 35.8296, lng: 128.5328}} level={8}
                 style={{width: '100%', height: '80vh'}}>
                {cities.map((city)=>(<MapMarker position={{lat: city.lat, lng: city.lng}}
                            onClick={getAqi}
                >

                </MapMarker>))}

                <MapMarker position={{lat: 35.8693, lng: 128.6062}}></MapMarker>
                <MapMarker position={{lat: 35.8467, lng: 128.5971}}></MapMarker>
            </Map>
        </>
    )
}

export default App
