import {useState} from "react";
import {Button, Flex, Form, Input, Layout, message} from "antd";
import {loginUser} from "../../database/userManager.js";
import bcrypt from "bcryptjs";
import {useNavigate} from "react-router-dom";

const {Content} = Layout;

function UserLoginPage(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // 로그인 버튼 로딩 상태

    const finish = async (values) => { // supabase에 finish 함수로 로그인 요청
        const {email, password} = values;
        setLoading(true); // 로그인 버튼 로딩 시작
        const ret = await loginUser(email, password);
        if (ret.message === 'email') {
            message.error('이메일이 존재하지 않습니다. 다시 확인해주세요.');
        } else {
            const isMatch = await bcrypt.compare(password, ret.data.password); // 비밀번호 비교
            if (isMatch) {
                message.success('로그인 성공하였습니다.');
                console.log(ret.data);
                sessionStorage.setItem('name', ret.data.name);
                sessionStorage.setItem('email', ret.data.email);
                sessionStorage.setItem('age', ret.data.age);
                navigate('/'); // 로그인 성공 시 메인 페이지로 이동
            } else {
                message.error('비밀번호가 일치하지 않습니다.');
            }
        }
        setLoading(false); // 로그인 버튼 로딩 해제
    }

    return (
        <Content>
            <Flex style={{justifyContent: 'center', alignItems: 'center', height: '100%'}} vertical>
                <h1 style={{fontSize: '2rem', marginBottom: '30px'}}>로그인</h1>
                <Form layout="horizontal" onFinish={finish} initialValues={{email: "qwer@naver.com", password: "1123"}}
                      labelCol={{span: 6}} wrapperCol={{span: 16}}>
                    <Form.Item label="이메일"
                               name="email"
                               rules={[{required: true, type: 'email', message: '이메일을 입력해주세요'}]}>
                        <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item label="패스워드"
                               name="password"
                               rules={[{required: true, message: '비밀번호를 입력해주세요'}]}>
                        <Input.Password/>
                    </Form.Item>
                    <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <Button type="primary" htmlType="submit" loading={loading} block>로그인</Button>
                    </div>
                </Form>
            </Flex>
        </Content>
    );
}

export default UserLoginPage;
