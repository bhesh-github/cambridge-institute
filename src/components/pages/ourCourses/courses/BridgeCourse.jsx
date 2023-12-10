import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BridgeCourse = ({ tabs }) => {
  const { bridgeCourseTab = "" } = useParams();

  const [currentTab, setCurrentTab] = useState(bridgeCourseTab);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentTab(bridgeCourseTab);
  }, [bridgeCourseTab]);

  const currentSec = {
    science: (
      <div className="section">
        <h1 className="head">Science (Physics, Chemistry, Botany & Zoology)</h1>
        <div className="bridge-course-content">
          {/* <div className="txt"> */}
          <p className="txt-p">
            The course provides fundamental concept of science and intensive
            entrance preparation. It focuses on frequently asked questions and
            built up test- taking skills for those students who wish to take
            entrance test for getting admissions in St. Xavier’s and SOS
            College. These colleges' admission process is competitive as well as
            complex and has fierce competition, where its educational standards
            keep moving up. It is a solid platform to prove and comprehend
            admission after entrance test.{" "}
          </p>
          {/* </div> */}
          <h2 className="sub-head">Subjects Offered:</h2>
          <p className="txt-p">
            Biology (Botany + Zoology), Chemistry, Physics, English,
            Mathematics, Social Studies, GK & IQ, and Entrance Preparation.
          </p>
          <h2 className="sub-head">Books Provided:</h2>
          <p className="txt-p">
            English, Mathematics, Physics, Chemistry, Biology and MCQ Entrance
            Preparation, and New Syllabus
          </p>
          <h2 className="sub-head">Duration:</h2>
          <p className="txt-p">10 weeks</p>
          <h2 className="sub-head">Classes 6 days per week:</h2>
          <p className="txt-p">Sunday to Friday 3.5 hours daily</p>
          <h2 className="sub-head">Weekly Model Test:</h2>
          <p className="txt-p">Once a week</p>
        </div>
      </div>
    ),
    management: (
      <div className="section">
        <h1 className="head">
          Management (Accountancy, Economics, Business Studies)
        </h1>
        <div className="bridge-course-content">
          {/* <div className="txt"> */}
          <p className="txt-p">
            The course provides fundamental concept of science and intensive
            entrance preparation. It focuses on frequently asked questions and
            built up test- taking skills for those students who wish to take
            entrance test for getting admissions in St. Xavier’s and SOS
            College. These colleges' admission process is competitive as well as
            complex and has fierce competition, where its educational standards
            keep moving up. It is a solid platform to prove and comprehend
            admission after entrance test.{" "}
          </p>
          {/* </div> */}
          <h2 className="sub-head">Subjects Offered:</h2>
          <p className="txt-p">
            Biology (Botany + Zoology), Chemistry, Physics, English,
            Mathematics, Social Studies, GK & IQ, and Entrance Preparation.
          </p>
          <h2 className="sub-head">Books Provided:</h2>
          <p className="txt-p">
            English, Mathematics, Physics, Chemistry, Biology and MCQ Entrance
            Preparation, and New Syllabus
          </p>
          <h2 className="sub-head">Duration:</h2>
          <p className="txt-p">10 weeks</p>
          <h2 className="sub-head">Classes 6 days per week:</h2>
          <p className="txt-p">Sunday to Friday 3.5 hours daily</p>
          <h2 className="sub-head">Weekly Model Test:</h2>
          <p className="txt-p">Once a week</p>
        </div>
      </div>
    ),
    "pcl-nursing": (
      <div className="section">
        <h1 className="head">PCL Nursing Bridge Course</h1>
        <div className="bridge-course-content">
          {/* <div className="txt"> */}
          <p className="txt-p">
            The course provides fundamental concept of science and intensive
            entrance preparation. It focuses on frequently asked questions and
            built up test- taking skills for those students who wish to take
            entrance test for getting admissions in St. Xavier’s and SOS
            College. These colleges' admission process is competitive as well as
            complex and has fierce competition, where its educational standards
            keep moving up. It is a solid platform to prove and comprehend
            admission after entrance test.{" "}
          </p>
          {/* </div> */}
          <h2 className="sub-head">Subjects Offered:</h2>
          <p className="txt-p">
            Biology (Botany + Zoology), Chemistry, Physics, English,
            Mathematics, Social Studies, GK & IQ, and Entrance Preparation.
          </p>
          <h2 className="sub-head">Books Provided:</h2>
          <p className="txt-p">
            English, Mathematics, Physics, Chemistry, Biology and MCQ Entrance
            Preparation, and New Syllabus
          </p>
          <h2 className="sub-head">Duration:</h2>
          <p className="txt-p">10 weeks</p>
          <h2 className="sub-head">Classes 6 days per week:</h2>
          <p className="txt-p">Sunday to Friday 3.5 hours daily</p>
          <h2 className="sub-head">Weekly Model Test:</h2>
          <p className="txt-p">Once a week</p>
        </div>
      </div>
    ),
    "a-levels": (
      <div className="section">
        <h1 className="head">A-Levels Bridge Course</h1>
        <div className="bridge-course-content">
          {/* <div className="txt"> */}
          <p className="txt-p">
            The course provides fundamental concept of science and intensive
            entrance preparation. It focuses on frequently asked questions and
            built up test- taking skills for those students who wish to take
            entrance test for getting admissions in St. Xavier’s and SOS
            College. These colleges' admission process is competitive as well as
            complex and has fierce competition, where its educational standards
            keep moving up. It is a solid platform to prove and comprehend
            admission after entrance test.{" "}
          </p>
          {/* </div> */}
          <h2 className="sub-head">Subjects Offered:</h2>
          <p className="txt-p">
            Biology (Botany + Zoology), Chemistry, Physics, English,
            Mathematics, Social Studies, GK & IQ, and Entrance Preparation.
          </p>
          <h2 className="sub-head">Books Provided:</h2>
          <p className="txt-p">
            English, Mathematics, Physics, Chemistry, Biology and MCQ Entrance
            Preparation, and New Syllabus
          </p>
          <h2 className="sub-head">Duration:</h2>
          <p className="txt-p">10 weeks</p>
          <h2 className="sub-head">Classes 6 days per week:</h2>
          <p className="txt-p">Sunday to Friday 3.5 hours daily</p>
          <h2 className="sub-head">Weekly Model Test:</h2>
          <p className="txt-p">Once a week</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="bridge-course">
      <div className="tabs">
        {tabs.map((item, idx) => {
          const { id = "", title = "", slug = "" } = item;
          return (
            <div
              className={`tab ${slug === currentTab && "active-tab"}`}
              key={id}
              onClick={() => {
                navigate(`/our-courses/bridge-course/${slug}`);
              }}
            >
              {title}
              {idx !== tabs.length - 1 && "/ "}
            </div>
          );
        })}
      </div>
      <div className="sections">{currentSec[currentTab && currentTab]}</div>
    </div>
  );
};

export default BridgeCourse;
BridgeCourse.defaultProps = {
  tabs: [
    {
      id: 0,
      title: "Science",
      slug: "science",
    },
    {
      id: 1,
      title: "Management",
      slug: "management",
    },
    {
      id: 2,
      title: "PCL Nursing",
      slug: "pcl-nursing",
    },
    {
      id: 3,
      title: "A-Levels",
      slug: "a-levels",
    },
  ],
};
