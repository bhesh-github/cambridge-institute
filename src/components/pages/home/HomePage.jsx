import HomeSlider from "./homeSlider/HomeSlider";
import NoticeBoard from "./noticeBoard/NoticeBoard";
import Testimonials from "./testimonials/Testimonials";
import IntroVideo from "./introVideo/IntroVideo";
import Courses from "./courses/Courses";
import BlogsAndPrograms from "./blogsAndPrograms/BlogsAndPrograms";
import Teachers from "./Teachers/Teachers";
import GetInTouch from "../../forAll/getInTouch/GetInTouch";

// ------------------------------------------------------------------
import Countries from "./country/Countries";

// import Testimonials from "./teamMember/Testimonials";
// import TeamMember from "./teamMember/TeamMembers";
// import Footer from "../../main/footer/Footer";
// import Partner from "./partner/Partner";
// import Blog from "./blogs/Blog";
// import Gallery from "./gallery/Gallery";
// import Popup from "../../forAll/Popup";

const HomePage = () => {
  // const dynamicPyramid = (rows) => {
  //   let stars = "*";
  //   for (let i = rows; i >= 1; i--) {
  //     if (i < rows) {
  //       stars += "**";
  //     }
  //     let result = "";
  //     let y = "";
  //     for (let j = 1; j < i; j++) {
  //       y += " ";
  //     }
  //     result += `${y && y}${stars && stars}`;
  //     console.log(result && result);
  //   }
  // };
  // dynamicPyramid(6);
  // console.log('---------------------------------------------')
  // const dynamicPyramid2 = (rows) => {
  //   let stars = "";
  //   for (let i = 1; i <= rows; i++) {
  //     stars += "*";
  //     // if (i < rows) {
  //     //   stars += "**";
  //     // }
  //     // let result = "";
  //     // let y = "";
  //     // for (let j = 1; j < i; j++) {
  //     //   y += " ";
  //     // }
  //     // result += `${y && y}${stars && stars}`;
  //     // console.log(result && result);
  //   }
  //   console.log(stars && stars);
  // };
  // dynamicPyramid2(6);

  return (
    <>
      {/* <Popup /> */}
      <div className="home-page">
        <HomeSlider />
        {/* <div className="static-notice">
          <NoticeBoard />
        </div> */}
        <div className="static-notice-board">
          <div className="notice-text">
            A strong foundation for the academic challenges that lie ahead.
            Whether you are pursuing science, arts, or commerce, our courses aim
            to bridge the gap between your SEE studies and the upcoming academic
            curriculum. The courses will commence from this September 19 and run
            through January 15 – an intensive period packed with insightful
            lessons, practical exercises, and valuable resources.
          </div>
        </div>
        <div className="column-contents">
          <div className="main-column">
            <div className="absolute-notice">
              <NoticeBoard />
            </div>
            <IntroVideo />
            <Courses />
            <Countries />
          </div>
          <div className="side-column">
            <Testimonials />
            <BlogsAndPrograms />
            <Teachers />
          </div>
        </div>
        <div className="get-in-touch-sec">
          <GetInTouch />
        </div>
        {/* <Partner /> */}
        {/* <TeamMember /> */}
      </div>
    </>
  );
};

export default HomePage;
