import { Carousel } from "primereact/carousel";

const TeacherCarousel = ({ teachersData }) => {
  const productTemplate = (data = "") => {
    return (
      <div className="teacher-cards">
        {data.map((item) => {
          const {
            id = "",
            name = "",
            image_link = "",
            position = "",
            created_at = "",
          } = item;
          return (
            <div className="teacher-card" key={id}>
              <img src={image_link} alt="" className="card-img" />
              <span className="text-wrapper">
                <div className="name">{name}</div>
                <div className="position">{position}</div>
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
        value={teachersData && teachersData}
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
