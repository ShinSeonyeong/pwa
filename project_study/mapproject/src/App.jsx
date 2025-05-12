import {useEffect, useState} from 'react'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";
import {Bar, Line, Pie, Column} from "@ant-design/plots";

const DemoDefaultTooltip = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
        },
        xField: '月份',
        yField: '月均降雨量',
        colorField: 'name',
        group: true,
        style: {
            inset: 5,
        },
        onReady: ({ chart }) => {
            try {
                chart.on('afterrender', () => {
                    chart.emit('legend:filter', {
                        data: { channel: 'color', values: ['London'] },
                    });
                });
            } catch (e) {
                console.error(e);
            }
        },
    };
    return <Column {...config} />;
};

function App() {
    // supabase에서 가져온 도시좌표 데이터
    const [cities, setCities] = useState([]);

    // 클릭한 좌표의 미세먼지 초미세먼지 데이터
    const [aqiInfo, setAqiInfo] = useState({});

    useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
        libraries: ["clusterer", "services", "drawing"]
    });

    // supabase에서 cities 데이터 가져오기, 
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
    const config = {
        data: [
            {x: '2023-10-01', y: 30},
            {x: '2023-10-02', y: 20},
            {x: '2023-10-03', y: 30},
            {x: '2023-10-04', y: 40},
            {x: '2023-10-05', y: 10},
        ],
        xField: 'x',
        yField: 'y',
    }

    return (
        <>
            <h1>미세먼지</h1>
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
            {/* {AireTable({...aqiInfo})} 이 방식과 <AirTable {...aqiInfo}></AirTable> 방식이 동일하다 */}
            <AirTable {...aqiInfo}></AirTable>
            <Line data={config.data} xField={config.xField} yField={config.yField}/>
            <Bar data={config.data} xField={config.xField} yField={config.yField}/>
            <Pie data={config.data} xField={config.xField} yField={config.yField} />
            <DemoDefaultTooltip/>
        </>
    )
}

export default App
