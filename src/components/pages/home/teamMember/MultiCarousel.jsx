import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../../images/student/std1.jpg";
import img2 from "../../../../images/student/std2.jpg";
import img3 from "../../../../images/student/std3.jpg";
import img4 from "../../../../images/student/std4.jpg";
import img5 from "../../../../images/student/std5.jpg";

const MultiCarousel = ({ testiCardsData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carouselSettings = {
    responsive: responsive,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="main-card">
      <div className="inner-card">
        <Carousel responsive={responsive} {...carouselSettings}>
          {testiCardsData &&
            testiCardsData.map((item) => <TestimonialsCard cardData={item} />)}
        </Carousel>
      </div>
    </div>
  );
};

export default MultiCarousel;

MultiCarousel.defaultProps = {
  testiCardsData: [
    {
      id: 0,
      name: "Ram babu",
      position: "CEO",
      image_link: img1,
      desc: "Hello this is me Mr. Robin and here I'm CEO of Cambridge. I and my team love to guide you for your better future. Hello this is me Mr. Robin and here I'm CEO of Cambridge.",
    },
    {
      id: 1,
      name: "Gowen Bieber",
      position: "Assistant",
      image_link: img2,
      desc: "Joining Cambridge was the best decision I have made in months! It is a must if you want to ace IELTS. The tips  t my nerves and seemed totally achievable as I focused on the strategies taught. ",
    },
    {
      id: 2,
      name: "Raiko Serot",
      position: "Managing Director",
      image_link: img3,
      desc: "CambridgeScholar helped me in overcoming my fear of IELTS! The mock tests, doubt sing for shorltisting my colleges. I will be suggesting LeapScholar to everyone.",
    },
    {
      id: 3,
      name: "SSp Jack",
      position: "Counselor",
      image_link: img4,
      desc: "helloooo The best part is Leapscholar also provided me with counseling for shorltisting my colleges. I will be suggesting LeapScholar to everyone.",
    },
    {
      id: 4,
      name: "Rock Venom",
      position: "Manager",
      image_link: img5,
      desc: "Joining Leap was the best decision I have made in months! It is a must if you want to ace IELTS. The exam,  and seemed totally achievable as I focused on the strategies taught.",
    },
    {
      id: 5,
      name: "Surya Bhai",
      position: "Ielts Teacher",
      image_link: img1,
      desc: "Joining Leap was the best decision I have made in months! It is a must if you want to and seemed totally achievable as I focused on the strategies taught.",
    },
    {
      id: 6,
      name: "Yt Gaming",
      position: "PTE teacher",
      image_link: img2,
      desc: "LeapScholar helped me in overcoming my fear of IELTS! The mock tests, doubt solving. The  counseling for shorltisting my colleges. I will be suggesting LeapScholar to everyone.",
    },
    {
      id: 7,
      name: "Iskol sita",
      position: "SAT Teacher",
      image_link: img3,
      desc: "LeapScholar helped me in overcoming my fear of IELTS! The mock tests, doubt so. The best part is   shorltisting my colleges. I will be suggesting LeapScholar to everyone.",
    },
  ],
};
