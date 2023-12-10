import React from "react";
// import { AiOutlinePlayCircle } from "react-icons/ai";

const HighlightCard = ({ countriesData }) => {
  const { image_link = "", country_name = "" } = countriesData;

  return (
    <div className="country" title={country_name}>
      <img src={image_link} alt="Image" className="flag" />
    </div>
  );
};

export default HighlightCard;
