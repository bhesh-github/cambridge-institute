import TestiCarousel from "./TestiCarousel";
import img1 from "../../../../assets/images/home/testimonials/img1.jpg";
import img2 from "../../../../assets/images/home/testimonials/img2.jpg";
import img3 from "../../../../assets/images/home/testimonials/img3.jpg";
import img4 from "../../../../assets/images/home/testimonials/img4.jpg";

const Testimonials = ({ testimonials }) => {
  let modifiedArray = [];
  for (let i = 0; i < testimonials.length - 1; i += 3) {
    modifiedArray.push(testimonials.slice(i, i + 3));
  }
  return (
    <div className="testimonials">
      <div className="bar">
        <div className="heading">Reviews</div>
        <div className="cards-wrapper">
          <TestiCarousel testiData={modifiedArray && modifiedArray} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
Testimonials.defaultProps = {
  testimonials: [
    {
      id: 0,
      name: "Jenny Dark",
      image_link: img1,
      message: "Great Place to be. Loved everything about cambridge.",
    },
    {
      id: 1,
      name: "Peter Parker",
      image_link: img2,
      message:
        "All the courses are upto date. Good Culture. Great Environment.",
    },
    {
      id: 2,
      name: "Harry Eater",
      image_link: img3,
      message:
        "Noting can be this good. Had amazing time studying with cambridge.",
    },
    {
      id: 3,
      name: "John Writer",
      image_link: img4,
      message:
        "Friendly, Peaceful and Warm at the same time. I'm sure you'll gonna love it.",
    },
    {
      id: 4,
      name: "Jenny Dark",
      image_link: img1,
      message: "Great Place to be. Loved everything about cambridge.",
    },
    {
      id: 5,
      name: "Peter Parker",
      image_link: img2,
      message:
        "All the courses are upto date. Good Culture. Great Environment.",
    },
    {
      id: 6,
      name: "Harry Eater",
      image_link: img3,
      message:
        "Noting can be this good. Had amazing time studying with cambridge.",
    },
    {
      id: 7,
      name: "John Writer",
      image_link: img4,
      message:
        "Friendly, Peaceful and Warm at the same time. I'm sure you'll gonna love it.",
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
