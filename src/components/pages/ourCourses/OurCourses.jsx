import { useParams } from "react-router-dom";
// import ieltsImg from "../../../images/preparation/ielts.jpg";
// import pteImg from "../../../images/preparation/pte.jpg";
import bannerImg from "../../../images/banner/course-banner.jpg";
// import { BiHeadphone } from "react-icons/bi";
// import { RxReader } from "react-icons/rx";
// import { TfiWrite } from "react-icons/tfi";
// import { RiSpeakLine } from "react-icons/ri";
import OtherBanner from "../../forAll/OtherBanner";
import { useEffect } from "react";

import BridgeCourse from "./courses/BridgeCourse";
import EntrancePreparation from "./courses/EntrancePreparation";
import OtherCourses from "./courses/OtherCourses";

const OurCourses = () => {
  const { courseSlug = "" } = useParams();

  useEffect(() => {}, [courseSlug]);

  return (
    <div className="our-courses-page">
      <OtherBanner bannerImg={bannerImg} text="Our Courses" />
      <div className="contents">
        {courseSlug === "bridge-course" ? (
          <BridgeCourse />
        ) : courseSlug === "st-xavier-s-and-sos-entrance-preparation" ? (
          <EntrancePreparation courseSlug={courseSlug} />
        ) : (
          <OtherCourses courseSlug={courseSlug} />
        )}
      </div>
    </div>
  );
};

export default OurCourses;
