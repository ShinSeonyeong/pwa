import { Bar, Line, Pie } from "@ant-design/plots";
import { Button } from "antd";
import { Percent } from "antd/es/progress/style";
import React from "react";

const MyChart = (props) => {
  const [data, setData] = React.useState(props.data);
  const lineConfig = {
    data,
    xField: "date",
    yField: "value",
    // height: 300,
    seriseField: "type", // 색상 분리
  };

  const changeData = () => {
    setData([
        {
            date: "2023-01-01",
            value: Math.floor(Math.random() * 100),
          },
          {
            date: "2023-01-02",
            value: Math.floor(Math.random() * 100),
          },
          {
            date: "2023-01-03",
            value: Math.floor(Math.random() * 100),
          },
          {
            date: "2023-01-04",
            value: Math.floor(Math.random() * 100),
          },
          {
            date: "2023-01-05",
            value: Math.floor(Math.random() * 100),
          },
    ])
  };

  const pieData = [
    {category: "A", Percent: 30},
    {category: "B", Percent: 90},
    {category: "C", Percent: 50},
    {category: "D", Percent: 70},
  ]

  const pieConfig = {
    data:pieData,
    angleField: "percent",
    colorField: "category",
    height: 300,
  }

  return (
    <>
      <div>MyChart</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "70%" }}>
          <Line {...lineConfig} />
        </div>
        <div style={{ width: "30%" }}>
          <Button onClick={changeData}>버튼</Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "70%" }}>
          <Bar {...lineConfig} />
        </div>
        <div style={{ width: "30%" }}>
          <Button onClick={changeData}>버튼</Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "70%" }}>
          <Pie {...lineConfig} />
        </div>
        <div style={{ width: "30%" }}>
          <Button onClick={changeData}>버튼</Button>
        </div>
      </div>
    </>
  );
};

export default MyChart;
