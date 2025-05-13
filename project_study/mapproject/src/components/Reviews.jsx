import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../api/supadb";
import { UserOutlined } from "@ant-design/icons";

export const Reviews = ({ city }) => {
  if (!city) {
    return <div>Loading... </div>;
  }
  // console.log('review', propCity);
  // const [city, setCity] = useState(propCity);

  // useEffect(() => {
  //   setCity(propCity);
  // }, [propCity]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(city.id)
      .then((data) => {
        setReviews(data); // 화면 재랜더링이 이뤄짐.
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <div>
      <h1> Review {city.name}</h1>
      <h2> 미세먼지 {city.aqi}</h2>
      {reviews.map((review) => {
        console.log(review);
        return (
          <div key={review.id}>
            <p>{review.comment}</p>
            <p>
              <UserOutlined /> 작성자: {review.user_name}
            </p>
            <p>작성일: {new Date(review.created_at).toLocaleDateString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
