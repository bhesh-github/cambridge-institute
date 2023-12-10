import React from "react";
import img1 from "../../../../images/gallery/g1.jpg";
import img2 from "../../../../images/gallery/g2.jpg";
import img3 from "../../../../images/gallery/g3.jpg";
import img4 from "../../../../images/gallery/g4.jpg";
import img5 from "../../../../images/gallery/g5.jpg";

const GalleyCard = () => {
  return (
    <div className="gallery-card">
      <div className="gallery-left">
        <img src={img1} alt="" className="g-one" />
      </div>
      <div className="gallery-right">
        <div className="first-left">
          <div className="up">
            <img src={img2} alt="" className="g-two" />
          </div>
          <div className="down">
            <img src={img3} alt="" className="g-three" />
          </div>
        </div>
        <div className="second-right">
          <div className="second-up">
            <img src={img4} alt="" className="g-four" />
          </div>
          <div className="second-down">
            <img src={img5} alt="" className="g-five" />
            {/* <h1 className="more-photo">11</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleyCard;
