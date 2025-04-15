import React, {useContext, useState} from 'react';
import {Card, Col, Form, Input, Layout, Row, Button, message} from "antd";
import {supabase} from '../../database/supabaseClient.js';
import bcrypt from 'bcryptjs';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const {Content} = Layout;

function UserAddPage(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
        const {name, email, age, phone, password} = values;
        //     등록 못하게 막기
        setLoading(true);
        try {
            const hashedPassword = await bcrypt.hash(password, 12);
            const {error} =
                await supabase.from('members')
                    .insert([{name, email, age, phone, password: hashedPassword}]);

            if (error) {
                Swal.fire({
                    icon: 'error',
                    title: "회원추가실패",
                    text: "사용자 추가 실패되었습니다."
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: "회원추가",
                    text: "사용자가 성공적으로 추가 되었습니다."
                });
                // Link로 이동 useNavigate 로 두개
                navigate('/user/list');
            }
        } catch (err) {
            console.error(err);
            console.log(err);
        }

        //  등록할 수 있게 풀기
        setLoading(false);
    }
    return (
        <Content>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card style={{margin: '1rem', padding: '1rem'}}>
                        <h1 style={{fontSize: '2rem'}}>사용자추가</h1>
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="이름" name="name" rules={[{required: true, message: '이름을 입력해주세요'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label="이메일" name="email"
                                       rules={[{required: true, type: 'email', message: '올바른 이메일을 입력해주세요'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label="나이" name="age" rules={[{required: true, message: '나이를 입력해주세요'}]}>
                                <Input type="number"/>
                            </Form.Item>
                            <Form.Item label="전화번호" name="phone" rules={[{required: true, message: '전화번호를 입력해주세요'}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label="비밀번호" name="password" rules={[{required: true, message: '비밀번호를 입력해주세요'}]}>
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading} block>
                                    등록
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Content>
    );
}

export default UserAddPage;