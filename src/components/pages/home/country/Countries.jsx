import Marquee from "react-fast-marquee";
import Country from "./Country";
import "react-multi-carousel/lib/styles.css";
// import { AiOutlinePlayCircle } from "react-icons/ai";
// import { PiTelevision } from "react-icons/pi";
// import { LuNewspaper } from "react-icons/lu";
import aus from "../../../../images/studyAbroad/aus.png";
import can from "../../../../images/studyAbroad/cad.png";
import usa from "../../../../images/studyAbroad/usa.png";
import uk from "../../../../images/studyAbroad/uk.png";
// import japan from "../../../../images/studyAbroad/japan.png";
// import india from "../../../../images/studyAbroad/india.png";
// import dubai from "../../../../images/studyAbroad/dubai.png";

// import { AirlineSeatFlatAngledSharp } from "@mui/icons-material";

const Countries = ({ coutriesList }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    a: {
      breakpoint: { max: 1065, min: 950 },
      items: 3.5,
    },
    b: {
      breakpoint: { max: 950, min: 820 },
      items: 3.5,
    },
    c: {
      breakpoint: { max: 820, min: 0 },
      items: 3.5,
    },
    d: {
      breakpoint: { max: 690, min: 480 },
      items: 3.2,
    },
    e: {
      breakpoint: { max: 480, min: 465 },
      items: 3.1,
    },
    f: {
      breakpoint: { max: 465, min: 435 },
      items: 2.8,
    },
    g: {
      breakpoint: { max: 435, min: 340 },
      items: 2.4,
    },
    h: {
      breakpoint: { max: 340, min: 0 },
      items: 2.1,
    },
  };
  // const carouselSettings = {
  //   responsive: responsive,
  //   arrows: false,
  //   autoPlay: true,
  //   autoPlaySpeed: 4000,
  //   infinite: true,
  //   // speed: 100,
  //   transitionDuration: 1,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="countries">
      <h1 className="head">Study Abroad</h1>
      <p className="highlight-desc">
        We offer a plethora of study abroad options.
      </p>
      <div className="marquee-wrapper">
        <Marquee
          // loop={0}
          speed={150}
          pauseOnHover={true}
        >
          {coutriesList &&
            coutriesList.map((item) => (
              <Country key={item.id} countriesData={item} />
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Countries;
Countries.defaultProps = {
  coutriesList: [
    {
      id: 0,
      image_link: aus,
      country_name: "Australia",
    },
    {
      id: 1,
      image_link: can,
      country_name: "Canada",
    },
    {
      id: 2,
      image_link: usa,
      country_name: "USA",
    },
    {
      id: 3,
      image_link: uk,
      country_name: "Australia",
    },
    {
      id: 4,
      image_link: aus,
      country_name: "Australia",
    },
    {
      id: 5,
      image_link: can,
      country_name: "Canada",
    },
    {
      id: 6,
      image_link: usa,
      country_name: "USA",
    },
    {
      id: 7,
      image_link: uk,
      country_name: "Australia",
    },
  ],
};
