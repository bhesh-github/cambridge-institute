import React from "react";
import cardImg from "../../../../images/card.jpg";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ cardDetail }) => {
  const {
    id = "",
    courseName = "",
    desc = "",
    courseImg = "",
    path = "",
  } = cardDetail && cardDetail;

  const navigate = useNavigate();
  return (
    <div
      className="course-card"
      onClick={() => {
        path && navigate(`/our-courses/${path}`);
      }}
      title={courseName}
    >
      <div
        className="course-img"
        style={{ backgroundImage: `url(${courseImg})` }}
      ></div>
      <div className="text-wrapper">
        <h1 className="title">{courseName}</h1>
        <p className="desc">{desc}</p>
      </div>
      {/* <button className="action-btn">Book Now</button> */}
      {/* <img src={courseImg} alt="Image" /> */}
    </div>
  );
};

export default CourseCard;

{
  /* <div
className="member-img"
style={{ backgroundImage: `url(${image})` }}
></div>
<div className="text-wrapper">
<h3 className="name">{name}</h3>
<p className="position">{position}</p>
<span className="icons">
  <GrFacebookOption className="icon fb" />
  <SiGithub className="icon github" />
  <RiLinkedinFill className="icon linkedin" />
</span>
</div>
</div> */
}
