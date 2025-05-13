import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../api/supadb";
import { EnvironmentFilled, UserOutlined } from "@ant-design/icons";
import { Card, Typography, Form, Input, Button, message, Rate } from "antd";
import { useForm } from "antd/es/form/Form";

const { Title, Text } = Typography;
const { TextArea } = Input;

export const Reviews = ({ city }) => {
  if (!city) {
    return <div>Loading... </div>;
  }
  // console.log('review', propCity);
  // const [city, setCity] = useState(propCity);

  // useEffect(() => {
  //   setCity(propCity);
  // }, [propCity]);
  const [reviews, setReviews] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchReviews(city.id)
      .then((data) => {
        setReviews(data); // 화면 재랜더링이 이뤄짐.
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  const handleSubmit = (values) => {
    console.log("submit");
    console.log(values);
  };

  return (
    <div>
      <h1> Review {city.name}</h1>
      <h2> 미세먼지 {city.aqi}</h2>
      {reviews && reviews.map((review) => (
          <div key={review.id}>
            <p>{review.comment}</p>
            <p>
              <UserOutlined />
              작성자: {review.user_name}
            </p>
            <p>작성일: {new Date(review.created_at).toLocaleDateString()}</p>
          </div>
        )
      )}
      <Card>
        <Title level={3}>
          <EnvironmentFilled />
          리뷰작성
        </Title>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="userName"
            label="이름"
            rules={[{ required: true, message: "이름을 입력하세요." }]}
          >
            <Input prefix={<UserOutlined />} placeholder="이름을 입력하세요." />
          </Form.Item>
          <Form.Item
            name="rating"
            label="평점"
            rules={[{ required: true, message: "평점을 선택해주세요." }]}
          >
            <Rate></Rate>
          </Form.Item>
          <Form.Item
            name="comment"
            label="리뷰내용"
            rules={[{ required: true, message: "리뷰내용을 입력하세요." }]}
          >
            <TextArea rows={4} placeholder="리뷰내용을 입력하세요." />
          </Form.Item>
          <Form.Item>          
            <Button type="primary" htmlType="submit">리뷰작성</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Reviews;
