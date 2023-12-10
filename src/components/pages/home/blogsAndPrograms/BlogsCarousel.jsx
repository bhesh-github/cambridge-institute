import { Carousel } from "primereact/carousel";
import { useNavigate } from "react-router-dom";

const BlogsCarousel = ({ pairList }) => {
  const navigate = useNavigate();
  const productTemplate = (data = "") => {
    // const { id = "", name = "", created_at = "" } = data;
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const date = d.getDate();

    return (
      <div className="blogs-programs-cards">
        {data.map((item = "") => {
          const { id = "", name = "", created_at = "" } = item;
          return (
            <div className="blogs-programs-card" key={id} title={name}>
              <span className="text-wrapper">
                <div
                  className="title"
                  onClick={() => {
                    navigate(`blogs-programs/guiding-the-path-of-students`);
                  }}
                >
                  {name}
                </div>
                <div className="date">
                  {` ${date && date}, ${month && month} ${year && year}`}
                </div>
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="blogs-carousel-wrapper">
      {" "}
      <Carousel
        value={pairList && pairList}
        numVisible={1}
        numScroll={1}
        // responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        // autoplay={autoplay}
        // autoplayInterval={3000}
      />
    </div>
  );
};

export default BlogsCarousel;
