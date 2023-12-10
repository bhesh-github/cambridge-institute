import Carousel from "react-material-ui-carousel";
import BannerText from "./BannerText";
import img1 from "../../../../images/home/homeSlider/img1.jpg";
import img2 from "../../../../images/home/homeSlider/img2.jpg";
import img3 from "../../../../images/home/homeSlider/img3.jpg";


function HomeSlider() {
  var items = [
    {
      img: img3,
    },
    {
      img: img2,
    },
    {
      img: img1,
    },
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel
        navButtonsAlwaysInvisible={true}
        className="carousel-comp"
        indicators={false}
      >
        {items.map((item, idx) => (
          <div className="slide-wrapper" key={idx}>
            <div className="dark-overlay"></div>
            <div
              alt=""
              className="slide-img"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            ></div>
          </div>
        ))}
      </Carousel>
      <BannerText />
    </div>
  );
}

export default HomeSlider;
