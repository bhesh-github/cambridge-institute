import React from "react";
import img1 from "../../../../images/partner/p1.png";

const PartnerCard = ({ item }) => {
  const { bgImg = "" } = item;
  return (
    <div className="p-card">
      <img src={bgImg} alt="" className="p-img" />
    </div>
  );
};

export default PartnerCard;
