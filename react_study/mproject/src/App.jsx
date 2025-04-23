import React, {useEffect, useState} from 'react';
import {Layout, Menu, Button, Grid, Row, Col, Card} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DashboardOutlined,
    SettingOutlined,
    InfoOutlined,
    FolderViewOutlined,
} from '@ant-design/icons';
import {Link, Route, Routes, useLocation} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import TodoPage from "./pages/todo/TodoPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import UserAddPage from "./pages/user/UserAddPage.jsx";
import UserListPage from "./pages/user/UserListPage.jsx";
import UserLoginPage from "./pages/user/UserLoginPage.jsx";
import Logout from "./components/logout.jsx";
import TodoListPage from "./pages/todo/TodoListPage.jsx";
import TodoAddPage from "./pages/todo/TodoAddPage.jsx";

const {Header, Sider, Content, Footer} = Layout;
const {useBreakpoint} = Grid;

// 메뉴 항목 구성
const items = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined/>,
        label: <Link to={`/`}>대시보드</Link>,
    },
    {
        key: 'todo',
        icon: <InfoOutlined/>,
        label: <Link to={`/todo`}>할일</Link>,
        children: [
            {key: '/todo/list', label: <Link to={'/todo/list'}>TodoList</Link>},
            {key: '/todo/add', label: <Link to={'/todo/add'}>+Todo</Link>},
        ],
    },
    {
        key: 'review',
        icon: <FolderViewOutlined/>,
        label: <Link to={`/review`}>리뷰</Link>,
    },
    {
        key: 'users',
        icon: <UserOutlined/>,
        label: '사용자 관리',
        children: [
            {key: 'users/list', label: <Link to={'/user/list'}>사용자목록</Link>},
            {key: 'users/add', label: <Link to={'/user/add'}>사용자추가</Link>},
        ],
    },
    {
        key: 'settings',
        icon: <SettingOutlined/>,
        label: '설정',
    },
];

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();
    const location = useLocation();
    const selectedKey = location.pathname;
    const [name, setName] = useState('');

    useEffect(() => {
        // 로그인 되어있는지 페이지 변경할 때 항상 확인해라.
        const sessionName = sessionStorage.getItem('name');
        if (sessionName) {
            // console.log(sessionName);
            setName(sessionName);
        } else {
            setName('');
        }
    }, [selectedKey]);

    return (
        <Layout style={{minHeight: '100vh'}}>
            {/* Sider (사이드 메뉴) */}
            <Sider
                trigger={null}
                collapsed={collapsed}
                breakpoint="md"
                collapsedWidth="0"
                onBreakpoint={(broken) => setCollapsed(broken)}
            >
                <div style={{height: 45, margin: 16, background: 'rgba(255,255,255,0.2)'}}
                     onClick={() => {
                         if (!screens.md) {
                             setCollapsed(true);
                         }
                     }}>
                    <Link to={'/'}>
                        <h1 style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: '1.6rem',
                            lineHeight: '3rem'
                        }}>관리자</h1>
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    selectedKeys={[selectedKey]}
                    items={items}
                    onClick={(e) => {
                        // screens.md는 화면사이즈가 미디엄 이상일 때 treu값이 출력
                        // screens.md 화면사이즈가 sx 스몰사이즐 때는 false값 출력
                        // console.log('누름' + screens.md);
                        if (!screens.md) {
                            // setCollapsed(true);
                        }
                    }}
                />
            </Sider>

            <Layout>
                {/* 상단 헤더 */}
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {!screens.md && (
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{fontSize: 20}}
                        />
                    )}
                    <div style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                        <span style={{marginRight: '2rem'}}>{name && `${name}님 환영합니다😊`}</span>

                        {/*세션스토리지에 값이 있으면 로그아웃 출력 / 없으면 로그인 출력*/}
                        <Button color="primary" variant="solid">
                            {
                                name ?
                                    (<Logout></Logout>)
                                    :
                                    (<Link to={'/user/login'}>로그인</Link>)

                                // sessionStorage.getItem('name') ?
                                //     (<Link to={'/user/login'}>로그아웃</Link>) :
                                //     (<Link to={'/user/login'}>로그인</Link>)
                            }
                        </Button>
                    </div>
                </Header>

                {/* 본문 콘텐츠 */}
                <Routes>
                    <Route path="/" element={<RootPage/>}/>
                    <Route path="/todo" element={<TodoPage/>}/>
                    <Route path="/review" element={<ReviewPage/>}/>
                    <Route path="/user/add" element={<UserAddPage/>}/>
                    <Route path="/user/list" element={<UserListPage/>}/>
                    <Route path="/user/login" element={<UserLoginPage/>}/>
                    <Route path="/todo" element={<TodoPage/>}>
                        <Route path="List" element={<TodoListPage/>}></Route>
                        <Route path="add" element={<TodoAddPage/>}></Route>
                    </Route>
                </Routes>

                {/* 하단 Footer */}
                <Footer style={{textAlign: 'center'}}>
                    2025.04.14 made by ssy
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
