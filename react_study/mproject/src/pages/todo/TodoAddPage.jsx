import React from 'react';
import {Button, Card, Form, Input, Layout, Select} from "antd";

function TodoAddPage(props) {
    const [loading, setLoading] = React.useState(false);

    const onFinish = (values) => {
        setLoading(true);
        fetch('https://6809e0631f1a52874cde2b73.mockapi.io/todos', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
            })

        setLoading(false);
    }
    return (
        <Layout.Content>
            <h1>Todo Add 페이지</h1>
            <Card hoverable>
                <Form layout="vertical" onFinish={onFinish} initialValues={{
                    createdAt: "2025-04-23T11:19:19.009Z",
                    todo: "추가하기",
                    completed: "false",
                    userId: 43,
                    id: "1"
                }}>
                    <Form.Item label="Todo" name="todo" rules={[{required: true, message: "할 일을 입력하세요."}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="completed" name="completed" rules={[{required: true, message: "할 일 완료여부를 입력하세요."}]}>
                        <Select>
                            <Select.Option value="false">미완료</Select.Option>
                            <Select.Option value="true">완료</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="userId" name="userId" rules={[{required: true, message: "사용자ID를 입력하세요."}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} block>저장</Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout.Content>
    );
}

export default TodoAddPage;