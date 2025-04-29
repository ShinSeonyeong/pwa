import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Input, Layout, notification, Select} from "antd";
import {useParams} from "react-router-dom";

function TodoModifyPage(props) {
    const [loading, setLoading] = React.useState(false);
    const {id} = useParams();
    const [form] = Form.useForm();

    const [values, setValues] = useState({
        createdAt: "2025-04-23T11:19:19.009Z",
        todo: "추가하기",
        completed: "false",
        userId: 43,
        id: "1"
    })

    useEffect(() => {
        fetch(`https://6809e0631f1a52874cde2b73.mockapi.io/todos/${id}`)
            .then(result => result.json())
            .then(data => {
                console.log(data);
                setValues(data);
                form.setFieldsValue(data)
            })
    }, [])

    const onFinish = (values) => {
        setLoading(true);
        fetch(`https://6809e0631f1a52874cde2b73.mockapi.io/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => {
                notification.success({
                    message:"성공적으로 저장하였습니다.",
                })
            })
        setLoading(false);
    }
    return (
        <Layout.Content>
            <h1>Todo Modify 페이지</h1>
            <Card hoverable>
                <Form form={form} layout="vertical" onFinish={onFinish} initialValues={values}>
                    <Form.Item label="Todo" name="todo" rules={[{required: true, message: "할 일을 입력하세요."}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="completed" name="completed"
                               rules={[{required: true, message: "할 일 완료여부를 입력하세요."}]}>
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

export default TodoModifyPage;