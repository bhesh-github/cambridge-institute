import { useState } from "react";
import { useParams } from "react-router-dom";
import banner from "../../../images/banner/abroadImg.jpeg";
import OtherBanner from "../../forAll/OtherBanner";
import SideForm from "./SideForm";

import SnackBar from "../../forAll/SnackBar";
import ProgressIndicator from "../../forAll/ProgressIndicator";

import Australia from "./countries/Australia";
import Usa from "./countries/Usa";
import Canada from "./countries/Canada";

const StudyAbroad = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    messageState: null,
    successMessage: "",
    failedMessage: "",
  });

  const { countrySlug } = useParams();

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper">
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div>
        <div className="study-abroad">
          <OtherBanner bannerImg={banner} text="Study Abroad" />
          <div className="study-contents">
            <div className=" content">
              {countrySlug === "australia" && <Australia />}
              {countrySlug === "canada" && <Canada />}
              {countrySlug === "usa" && <Usa />}
            </div>
            <SideForm
              setFormSubmitting={setFormSubmitting && setFormSubmitting}
              setSnackBarState={setSnackBarState && setSnackBarState}
              setAlertMessage={setAlertMessage && setAlertMessage}
            />
          </div>
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

export default StudyAbroad;
