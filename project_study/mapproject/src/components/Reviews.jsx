import React, { useState } from "react";

export const Reviews = ({ city: propCity }) => {
    if(propCity == null) {
        return <div>Loading... </div>;
    }
  const [city, setCity] = useState(propCity);

  if (propCity == null) {
    console.log(city);
    return <div>Loading... </div>;
  }
  return (
    <div>
      <h1> Review{city.name}</h1>
      <h1> 미세먼지{city.aqi}</h1>
    </div>
  );
};

export default Reviews;
