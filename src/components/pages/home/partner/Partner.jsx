import React, { useEffect, useState } from "react";
import backgroundImg from "../../../../images/background/bg.png";
import PartnerCard from "./PartnerCard";
import img1 from "../../../../images/partner/p1.png";
import img2 from "../../../../images/partner/p2.png";
import img3 from "../../../../images/partner/p3.png";
import img4 from "../../../../images/partner/p4.png";
import img5 from "../../../../images/partner/p5.png";
import img6 from "../../../../images/partner/p6.png";
import img7 from "../../../../images/partner/p7.png";
import img8 from "../../../../images/partner/p8.png";
import img9 from "../../../../images/partner/p9.png";
import img10 from "../../../../images/partner/p10.png";
import img11 from "../../../../images/partner/p11.png";
import img12 from "../../../../images/partner/p12.png";
import img13 from "../../../../images/partner/p13.png";
import img14 from "../../../../images/partner/p14.png";

const Partner = ({ pDetails }) => {
  const [sliceNum, setSliceNum] = useState(13);

  useEffect(() => {
    window.innerWidth < 550 ? setSliceNum(4) : setSliceNum(13);
  }, []);
  
  return (
    <div
      className="partner"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="in-wrapper">
        <h1 className="head">Partner Institution/Universities</h1>
        <div className="cards-wrapper" data-aos="zoom-in">
          {pDetails &&
            pDetails
              .slice(0, sliceNum && sliceNum)
              .map((item, idx) => (
                <PartnerCard key={idx} item={item && item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;

Partner.defaultProps = {
  pDetails: [
    {
      id: 0,
      bgImg: img1,
    },
    {
      id: 1,
      bgImg: img2,
    },
    {
      id: 2,
      bgImg: img3,
    },
    {
      id: 0,
      bgImg: img5,
    },
    {
      id: 1,
      bgImg: img6,
    },
    {
      id: 2,
      bgImg: img7,
    },
    {
      id: 4,
      bgImg: img4,
    },
    {
      id: 0,
      bgImg: img8,
    },
    {
      id: 1,
      bgImg: img9,
    },
    {
      id: 2,
      bgImg: img10,
    },
    {
      id: 0,
      bgImg: img12,
    },
    {
      id: 1,
      bgImg: img13,
    },
    {
      id: 2,
      bgImg: img14,
    },
    {
      id: 3,
      bgImg: img11,
    },
  ],
};
