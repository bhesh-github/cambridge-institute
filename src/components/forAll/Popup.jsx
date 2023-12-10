import React, { useState } from "react";
import popupImg from "../../images/forAll/popupImg.jpeg";
import { RxCross1 } from "react-icons/rx";

const Popup = () => {
  const [isPopup, setIsPopup] = useState(true);

  return (
    <div
      class="overlay-modal"
      id="modal_overylay"
      style={{ display: isPopup ? "block" : "none" }}
    >
      <div
        class="overlay"
        onClick={() => {
          setIsPopup(false);
        }}
      ></div>

      <div className="image-wrapper">
        <RxCross1
          className="close-icon"
          onClick={() => {
            setIsPopup(false);
          }}
        />
        <img className="pop-img" src={popupImg} alt="" />
      </div>
    </div>
  );
};

export default Popup;
