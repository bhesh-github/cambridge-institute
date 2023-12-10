import MessageForm from "./MessageForm";
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneAndroid } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const GetInTouch = () => {
  return (
    <div className="get-in-touch-sec">
      <div className="sec-content">
        <div className="left-sec">
          <h1 className="sec-head">Get In Touch</h1>
          <div className="sec-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            dolorum eum iusto alias voluptatem ea earum illo ipsum quibusdam
            voluptas cum eius voluptatibus soluta fugiat at, magni vero
            cupiditate est. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Similique dolorum eum iusto alias voluptatem ea earum illo
            ipsum quibusdam voluptas cum eius voluptatibus soluta fugiat at,
            magni vero cupiditate est.
          </div>
          <div className="info-icons">
            <div className="icons-info-wrapper">
              <TfiEmail className="info-icon" />
              <span className="info">info@cambridge.edu.np</span>
            </div>
            <div className="icons-info-wrapper">
              <MdPhoneAndroid className="info-icon" />
              <span className="info">014790049, 014795324</span>
            </div>
            <div className="icons-info-wrapper">
              <MdLocationPin className="info-icon" />
              <span className="info">
                New Baneshwor, (Alongwith Machhapuchre Bank), Kathmandu Nepal
              </span>
            </div>
          </div>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

export default GetInTouch;
