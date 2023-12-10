import { BiHeadphone } from "react-icons/bi";
import { RxReader } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { RiSpeakLine } from "react-icons/ri";

import pteImg from "../../../../images/preparation/pte.jpg";
import ieltsImg from "../../../../images/preparation/ielts.jpg";

const OtherCourses = ({ courseSlug = "" }) => {
  return (
    <div className="other-courses">
      <h1 className="head dynamic-courses-head">{courseSlug}</h1>
      <div className="preparation-content">
        <div className="txt">
          <p className="txt-p">
            The IELTS exam is a requirement for international individuals
            seeking to pursue education or employment in an English-speaking
            country. It is widely accepted in countries like the UK, Australia,
            New Zealand, the United States, and Canada for university
            admissions. The primary focus of the exam is to evaluate candidates'
            proficiency in listening, reading, speaking, and writing in English.
          </p>
          <p className="txt-p">
            There are two variants of the IELTS test:{" "}
            <span className="txt-highlight">Academic</span> and{" "}
            <span className="txt-highlight">General Training</span> . While the
            Listening and Speaking sections are the same for both, the Reading
            and Writing sections vary depending on the specific test chosen by
            the candidate. Test-takers have the option to take the IELTS exam
            either on paper or electronically, depending on their preference.
            The validity of the test score is two years from the date of the
            exam.
          </p>
          <p className="txt-p">
            IELTS enjoys recognition from over 10,000 institutions in more than
            140 countries, including universities, colleges, educational
            institutions, government agencies, and immigration authorities.
          </p>
        </div>
        <img src={ieltsImg} alt="" className="course-img" />
      </div>
      <div className="cards-wrapper">
        <div className="card">
          <div className="icon">
            <BiHeadphone className="listen-icon" />
            <p className="icon-txt">Listening</p>
          </div>
          <div className="desc">
            The listening portion of the test typically spans approximately 30
            minutes, and an additional 10 minutes are allotted for the task of
            transferring your responses from the question booklet to the answer
            sheet.
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <RxReader className="listen-icon" />
            <p className="icon-txt">Reading</p>
          </div>
          <div className="desc">
            The reading section typically requires around 60 minutes to
            complete, including the time needed to read the passages and answer
            the questions.
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <TfiWrite className="listen-icon" />
            <p className="icon-txt">Writing</p>
          </div>
          <div className="desc">
            For the writing section, you should allocate approximately 60
            minutes to complete both tasks, which involve crafting two written
            responses.
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <RiSpeakLine className="listen-icon" />
            <p className="icon-txt">Speaking</p>
          </div>
          <div className="desc">
            In the speaking section, you'll spend about 11 to 14 minutes engaged
            in a conversation with the examiner, covering a range of topics and
            tasks.
          </div>
        </div>
      </div>
      <div className="note">
        Note: You can schedule your exam date by getting in touch with us
        977-98989898 | 5646455 .
      </div>
    </div>
  );
};

export default OtherCourses;
