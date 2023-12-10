import React from "react";
// import std from "../../../../images/student/std1.jpg";

const TestimonialsCard = ({ cardData = "" }) => {
  const {
    id = "",
    name = "",
    desc = "",
    image_link = "",
    position = "",
  } = cardData;
  return (
    <div className="card">
      <div className="top">{desc}</div>
      <div className="down">
        <div className="staff">
          <span className="staff-center">
            <div className="name">{name}</div>
            <div className="staff-position">{position}</div>
          </span>
          <img src={image_link} alt="" className="staff-img" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
