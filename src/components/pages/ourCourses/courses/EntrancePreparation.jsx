import ieltsImg from "../../../../images/preparation/ielts.jpg";

const EntrancePreparation = ({ courseSlug }) => {
  return (
    <div className="entrance-preparation">
      <h1 className="head">St. Xavier's & SOS Entrance Preparation</h1>
      <div className="desc">
        {/* <div className="txt"> */}
        <p className="txt-p">
          The course provides fundamental concept of science and intensive
          entrance preparation. It focuses on frequently asked questions and
          built up test- taking skills for those students who wish to take
          entrance test for getting admissions in St. Xavier’s and SOS College.
          These colleges' admission process is competitive as well as complex
          and has fierce competition, where its educational standards keep
          moving up. It is a solid platform to prove and comprehend admission
          after entrance test.{" "}
        </p>
        {/* </div> */}
        <h2 className="sub-head">Subjects Offered:</h2>
        <p className="txt-p">
          Biology (Botany + Zoology), Chemistry, Physics, English, Mathematics,
          Social Studies, GK & IQ, and Entrance Preparation.
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
  );
};

export default EntrancePreparation;
