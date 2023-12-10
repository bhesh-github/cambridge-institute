import { useState } from "react";
import OtherBanner from "../../forAll/OtherBanner";
import bannerImg from "../../../images/banner/contact-us.png";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import SnackBar from "../../forAll/SnackBar";
import GetInTouch from "../../forAll/getInTouch/GetInTouch";

const Contact = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "",
    failedMessage: "",
  });

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper">
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div className="contact-us">
        <OtherBanner bannerImg={bannerImg && bannerImg} text="Contact Us" />
        <div className="contents">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3752409713156!2d85.31923917551984!3d27.70569827618346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190786e87ceb%3A0xcd0bb5ab90660324!2sCambridge%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1696399045756!5m2!1sen!2snp"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <GetInTouch />
        </div>
      </div>
      <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </>
  );
};

export default Contact;
