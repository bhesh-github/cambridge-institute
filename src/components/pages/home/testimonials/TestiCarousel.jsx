import { Carousel } from "primereact/carousel";

const TeacherCarousel = ({ testiData }) => {
  const productTemplate = (data = "") => {
    return (
      <div className="testi-cards">
        {data.map((item) => {
          const {
            id = "",
            name = "",
            message = "",
            image_link = "",
            created_at = "",
          } = item;
          return (
            <div className="testi-card" key={id}>
              <img src={image_link} alt="" className="card-img" />
              <span className="text-wrapper">
                <div className="name">{name}</div>
                <div className="message">{message}</div>
                {/* <div className="date">
                                  {" "}
                                  {` ${date && date}, ${
                                      month && month
                                  } ${year && year}`}
                              </div> */}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="testi-wrapper">
      <Carousel
        value={testiData && testiData}
        numVisible={1}
        numScroll={1}
        orientation="vertical"
        verticalViewPortHeight="330px"
        // verticalViewPortHeight="max-content"
        // height="maxContent"
        itemTemplate={productTemplate && productTemplate}
      />
    </div>
  );
};

export default TeacherCarousel;
