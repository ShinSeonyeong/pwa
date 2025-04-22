import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Input, Layout, message, Modal, notification, Popconfirm, Table} from "antd";
import {deleteUserByIds, getUsers} from "../../database/userManager.js";

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
    const [showModal, setShowModal] = useState(false);

    const [findUser, setFindUser] = useState({});
    const [form] = Form.useForm();

    async function loadData() {
        const {data} = await getUsers();
        setDataSource(data);
    }

    // selectedRowKeys는 현재 선택된 키 id값 사용하기 위한 용도
    // onChange 선택된 행이 변경되었을 때 실행되는 함수 정의
    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    async function handleEdit() {
        // message.info('눌렀음');
        if (selectedRowKeys.length !== 1) {
            message.warning('수정할 행을 선택하세요');
            return;
        }
        const target = dataSource.find(user => user.id === selectedRowKeys[0]);
        setFindUser(target);
        form.setFieldsValue(target);
        setShowModal(true);
    }

    async function handleDelete() {
        const {error} = await deleteUserByIds(selectedRowKeys)
        message.info('누름' + selectedRowKeys);
        // error는 null값일 때 성공
        // error 값이 있으면 실패
        if (error) {
            message.error(error);
        } else {
            message.success('삭제 성공');
            notification.success({
                message: "삭제하였습니다.",
            })
            setSelectedRowKeys([])
            loadData();
        }
    }

    async function handleModalOk() {
        // message.info('ok 눌렀음');
        setShowModal(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Content>
            <Card hoverable style={{margin: '1rem', overflowX: 'auto'}}>
                <h1>안녕하세요.</h1>
                <div style={{margin: '1rem 0'}}>
                    <Popconfirm title="삭제하시겠습니까?" onConfirm={handleDelete}>
                        <Button danger disabled={selectedRowKeys.length === 0}>삭제</Button>
                    </Popconfirm>
                    <span style={{marginRight: '1rem'}}></span>
                    <Button type="primary" onClick={handleEdit}>수정</Button>
                </div>
                <Modal
                    title={"사용자 수정"}
                    open={showModal}
                    onCancel={() => setShowModal(false)}
                    onOk={handleModalOk}
                >
                    수정이 가능한 모달
                    <Form layout={'vertical'} form={form}>
                        <Form.Item label="이름" name="name" rules={[{required: true}]}>
                            <input></input>
                        </Form.Item>
                        <Form.Item label="email" name="name" rules={[{required: true, type: 'email'}]}>
                            <input></input>
                        </Form.Item>
                        <Form.Item label="나이" name="age" rules={[{required: true}]}>
                            <input></input>
                        </Form.Item>
                        <Form.Item label="번호" name="phone" rules={[{required: true}]}>
                            <input></input>
                        </Form.Item>
                    </Form>
                </Modal>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey="id"
                    rowSelection={rowSelection}
                    scroll={{x: 'max-content'}}
                    style={{width: '100%'}}
                >
                </Table>
            </Card>
        </Content>
    )
        ;
}

export default UserListPage;
