import OtherBanner from "../../forAll/OtherBanner";
import bannerImg from "../../../images/banner/downloads.jpg";
import { TfiEye } from "react-icons/tfi";
import pdfFile from "../../../assets/x1.pdf";

const Downloads = ({ downloadsList }) => {
  return (
    <div className="downloads">
      <OtherBanner bannerImg={bannerImg && bannerImg} text='Downloads' />

      <div className="section-wrapper">
        <div className="downloads-section">
          <h1 className="section-head">Downloads</h1>
          <div className="cards-wrapper">
            {downloadsList.map((item) => {
              const { id = "", title = "", created_at = "" } = item;
              const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              return (
                <div className="notice-card" key={id}>
                  <a href={pdfFile} target="__blank" className="title-wrapper">
                    <div className="title">{title}</div>
                  </a>
                  <a href={pdfFile} target="__blank" className="view-btn">
                    <div className="text">View</div>
                    <TfiEye className="eye-icon" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
Downloads.defaultProps = {
  downloadsList: [
    {
      id: 1,
      created_at: "29, September 2023",
      title: "Accountancy E-Book Bridge Course",
    },
    {
      id: 2,
      created_at: "29, September 2023",
      title: "GK&IQ Objectives E-Book",
    },
    {
      id: 3,
      created_at: "29, September 2023",
      title: "GK Objectives E-Books",
    },
    {
      id: 4,
      date: "29, September 2023",
      title: "Diploma objective E-Books",
    },
    {
      id: 5,
      date: "29, September 2023",
      title: "Biology Objective E-Book",
    },
    {
      id: 6,
      date: "29, September 2023",
      title: "Chemistry Objectives E-Book",
    },
    {
      id: 7,
      date: "29, September 2023",
      title: "Objective of Physics E-Book",
    },
    {
      id: 8,
      date: "29, September 2023",
      title: "Objective of Mathematics E-Book",
    },
  ],
};
