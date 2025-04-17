import React, {useEffect, useState} from 'react';
import {Card, Layout, Table} from "antd";
import {getUsers} from "../../database/userManager.js";

const {Content} = Layout;

function UserListPage(props) {
    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "email", dataIndex: "email"},
        {title: "age", dataIndex: "age"},
        {title: "phone", dataIndex: "phone"},
    ];
    const [dataSource, setDataSource] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectedRowChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
        console.log('선택된행 키' + newSelectedRowKeys);
    }

    // selectedRowKeys는 현재 선택된 키 id값 사용하기 위한 용도
    // onChange 선택된 행이 변경되었을 때 실행되는 함수 정의
    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectedRowChange,
    };

    useEffect(() => {
        async function loadData() {
            const {data} = await getUsers();
            setDataSource(data);
        }

        loadData();
    }, []);

    return (
        <Content>
            <Card hoverable style={{margin: '1rem', overflowX: 'auto'}}>
                <h1>안녕하세요.</h1>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey="id"
                    rowSelection={rowSelection}
                    scroll={{x: 'max-content'}}
                    style={{width:'100%'}}
                >
                </Table>
            </Card>
        </Content>
    );
}

export default UserListPage;

