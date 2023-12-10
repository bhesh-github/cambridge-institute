import CourseCarousel from "./CourseCarousel";
import img1 from "../../../../images/home/courses/img1.png";
import img2 from "../../../../images/home/courses/img2.jpg";
import img3 from "../../../../images/home/courses/img3.jpg";
import img4 from "../../../../images/home/courses/img4.jpg";

const Courses = ({ coursesList }) => {
  // const cards =
  // coursesDetails &&
  // coursesDetails.map((item) => {
  //   return <CourseCard cardDetail={item && item} key={item.id} />;
  // });

  return (
    <div className="courses">
      <div className="in-wrapper">
        <div className="h-course">
          <div className="header-text">
            <h1 className="heading">Our Courses</h1>
            <p className="course-desc">
              We deliver advanced-level classes conducted by subject-matter
              experts who are professionals in their fields.
            </p>
          </div>
        </div>
        <CourseCarousel coursesList={coursesList && coursesList} />
      </div>
    </div>
  );
};

export default Courses;

Courses.defaultProps = {
  coursesList: [
    {
      id: 0,
      courseName: "Bridge Course",
      desc: " Students wanting to be successful do not only need knowledge and understanding, but also need to learn how to make the best of what they know and how to keep on learning in today’s rapidly-developing world. Cambridge Bridge Course (CBC) offers SEE appeared students excellent preparation for their next steps in education. Each year, thousands of students doing Cambridge Bridge Course secure their places and positions in leading colleges in Nepal.",
      courseImg: img1,
      path: "pte",
    },
    {
      id: 1,
      courseName: "Entrance Prepration Classes",
      desc: "High Success rate in competitive examination of reputed colleges, Expert and ",
      courseImg: img2,
      path: "ielts",
    },
    {
      id: 2,
      courseName: "St. Xavier's & SOS Entrance Preparation",
      desc: "The course provides fundamental concept of science and intensive entrance preparation. It focuses on frequently asked questions and built up test- taking skills for those students who wish to take entrance test for getting admissions in St. Xavier’s and SOS College. These colleges' admission process is competitive as well as complex and has fierce competition, where its educational standards keep moving up. It is a solid platform to prove and comprehend admission after entrance test.",
      courseImg: img3,
      path: "pte",
    },
    {
      id: 3,
      courseName: "A Level Bridge Course",
      desc: "A Level Bridge Course gives excellent preparation for those students who want A Level education as their next step. The course is designed in such way to introduce and make students learn the difference between O level, CBSE and SEE curricula. It focuses on the preparation of entrance exam of the targeted colleges.",
      courseImg: img4,
      path: "ielts",
    },
    {
      id: 4,
      courseName: "Bridge Course",
      desc: " Students wanting to be successful do not only need knowledge and understanding, but also need to learn how to make the best of what they know and how to keep on learning in today’s rapidly-developing world. Cambridge Bridge Course (CBC) offers SEE appeared students excellent preparation for their next steps in education. Each year, thousands of students doing Cambridge Bridge Course secure their places and positions in leading colleges in Nepal.",
      courseImg: img1,
      path: "pte",
    },
    {
      id: 5,
      courseName: "Entrance Prepration Classes",
      desc: "High Success rate in competitive examination of reputed colleges, Expert and ",
      courseImg: img2,
      path: "ielts",
    },
    {
      id: 6,
      courseName: "St. Xavier's & SOS Entrance Preparation",
      desc: "The course provides fundamental concept of science and intensive entrance preparation. It focuses on frequently asked questions and built up test- taking skills for those students who wish to take entrance test for getting admissions in St. Xavier’s and SOS College. These colleges' admission process is competitive as well as complex and has fierce competition, where its educational standards keep moving up. It is a solid platform to prove and comprehend admission after entrance test.",
      courseImg: img3,
      path: "pte",
    },
    {
      id: 7,
      courseName: "A Level Bridge Course",
      desc: "A Level Bridge Course gives excellent preparation for those students who want A Level education as their next step. The course is designed in such way to introduce and make students learn the difference between O level, CBSE and SEE curricula. It focuses on the preparation of entrance exam of the targeted colleges.",
      courseImg: img4,
      path: "ielts",
    },
  ],
};
