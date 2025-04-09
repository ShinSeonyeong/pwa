import "./App.css";
import ComboBox from "./components/ComboBox";
import Button from "./components/Button";
import { Card } from "./components/Card";

import Stack from "@mui/material/Stack";
import MButton from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import BasicRating from "./components/Basicrating";
import { CaretRightOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function App() {
  return (
    <>
      <div>
        <Divider></Divider>
        <Divider>Text</Divider>
        <Divider orientation="right">Right Text</Divider>
        <Divider orientation="right" orientationMargin={50}>
          Right Text with 50px orientation
        </Divider>
        <CaretRightOutlined />
        <Button>수정이 어렵다</Button>

        <BasicRating />
        <Button>antd</Button>
        <Checkbox defaultChecked></Checkbox>
        <Stack spacing={2} direction="row">
          <MButton
            variant="text"
            onClick={() => {
              alert("hi");
            }}
          >
            안녕
          </MButton>
          <MButton variant="contained">하세요</MButton>
          <MButton variant="outlined">점점</MButton>
        </Stack>
      </div>
      <ComboBox></ComboBox>
      <Card>TEST</Card>
      <Card primary="true">TEST</Card>
      <Button />

      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </>
  );
}

export default App;
