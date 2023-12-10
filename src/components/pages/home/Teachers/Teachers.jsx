import TestiCarousel from "./TeacherCarousel";
import img1 from "../../../../assets/images/home/teachers/img1.jpg";
import img2 from "../../../../assets/images/home/teachers/img2.jpg";
import img3 from "../../../../assets/images/home/teachers/img3.png";

const Teachers = ({ teachersList }) => {
  let modifiedArray = [];
  for (let i = 0; i < teachersList.length - 1; i += 3) {
    modifiedArray.push(teachersList.slice(i, i + 3));
  }
  return (
    <div className="teachers">
      <div className="bar">
        <div className="heading">Teachers</div>
        <div className="cards-wrapper">
          <TestiCarousel teachersData={modifiedArray && modifiedArray} />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
Teachers.defaultProps = {
  teachersList: [
    {
      id: 0,
      name: "Jenny Dark",
      image_link: img1,
      position: "Ielts Teacher",
    },
    {
      id: 1,
      name: "Peter Parker",
      image_link: img2,
      position: "PTE Teacher",
    },
    {
      id: 2,
      name: "Harry Eater",
      image_link: img3,
      position: "Course Teacher",
    },
    {
      id: 3,
      name: "John Writer",
      image_link: img1,
      position: "Tofel Teacher",
    },
    {
      id: 4,
      name: "Jenny Dark",
      image_link: img2,
      position: "Ielts Teacher",
    },
    {
      id: 5,
      name: "Peter Parker",
      image_link: img3,
      position: "PTE Teacher",
    },
    {
      id: 6,
      name: "Harry Eater",
      image_link: img1,
      position: "Course Teacher",
    },
    {
      id: 7,
      name: "John Writer",
      image_link: img2,
      position: "Tofel Teacher",
    },
    {
      id: 8,
      name: "John Writer",
      image_link: img2,
      position: "Tofel Teacher",
    },
  ],
};

// {testimonials &&
//   testimonials.slice(0, 3).map((testi) => {
//     const {
//       id = "",
//       name = "",
//       message = "",
//       image_link = "",
//       created_at = "",
//     } = testi;

//     {
//       /* const months = [
//                       "January",
//                       "February",
//                       "March",
//                       "April",
//                       "May",
//                       "June",
//                       "July",
//                       "August",
//                       "September",
//                       "October",
//                       "November",
//                       "December",
//                   ];
//                   const d = new Date(created_at.slice(0, 10));
//                   const year = d.getFullYear();
//                   const month = months[d.getMonth()];
//                   const date = d.getDate(); */
//     }

//     return (
//       <div className="related-card" key={id}>
//         <img src={image_link} alt="" className="card-img" />
//         <span className="text-wrapper">
//           <div className="name">{name}</div>
//           <div className="message">{message}</div>
//           {/* <div className="date">
//                                   {" "}
//                                   {` ${date && date}, ${
//                                       month && month
//                                   } ${year && year}`}
//                               </div> */}
//         </span>
//       </div>
//     );
//   })}
