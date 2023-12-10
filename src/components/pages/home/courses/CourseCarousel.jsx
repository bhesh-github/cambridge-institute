import { Carousel } from "primereact/carousel";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

const CourseCarousel = ({ coursesList }) => {
  // const navigate = useNavigate();
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "820px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "630px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "400px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const productTemplate = (data = "") => {
    // const {
    //   id = "",
    //   courseName = "",
    //   desc = "",
    //   courseImg = "",
    //   path = "",
    // } = data;
    return <CourseCard cardDetail={data} />;
  };
  return (
    <div className="course-carousel-wrapper">
      {" "}
      <Carousel
        value={coursesList && coursesList}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        width='100%'
        // autoplay={autoplay}
        // autoplayInterval={3000}
      />
    </div>
  );
};

export default CourseCarousel;
