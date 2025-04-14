import { Col, Image, Layout, Menu, Row } from "antd";
import "./App.css";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MailOutlined, ManOutlined, WomanOutlined } from "@ant-design/icons";
import { useState } from "react";

function App() {
  const [currentMenu, setCurrentMenu] = useState("menu1");
  const items = [
    { label: "MENU-1", icon: <MailOutlined />, key: "menu1" },
    { label: "직원관리", icon: <ManOutlined />, key: "menu2" },
    { label: "할일관리", icon: <WomanOutlined />, key: "menu3" },
    {
      label: "예약관리",
      icon: <WomanOutlined />,
      children: [
        {
          type: "group",
          label: "item1",
          children: [
            { label: "예약등록", key: "menu4" },
            { label: "예약삭체", key: "menu5" },
          ],
        },
        {
          type: "group",
          label: "item2",
          children: [
            { label: "예약리스트", key: "menu6" },
            { label: "예약수정", key: "menu7" },
          ],
        },
      ],
    },
  ];

  const handleMenu = (e) => {
    console.log(e);
    setCurrentMenu(e.key);
  };
  return (
    <Layout className="w-full h-screen">
      <Sider className="!bg-yellow-200">
        <div className="text-amber-900 font-bold">
          <h1 className="text-3xl text-center py-3">SSY관리자</h1>
          <Menu
            onClick={handleMenu}
            selectedKeys={currentMenu}
            items={items}
          ></Menu>
        </div>
      </Sider>
      <Layout>
        <Header className="!bg-blue-500 !p-0">
          <Menu
            onClick={handleMenu}
            selectedKeys={currentMenu}
            items={items}
            mode="horizontal"
          ></Menu>
        </Header>
        <Content>
          <h1 className="text-5xl">Content</h1>
          <Row>
            <Col xs={24}  lg={4}>
              <h1>제목</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           </Col>
            <Col xs={12} lg={4}>
              <h1>제목</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           </Col>
            <Col xs={12} lg={4}>
              <h1>제목</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           </Col>
          </Row>

          <Image
            className="!w-40"
            src="data:image/jpeg;base64,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"
          ></Image>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
