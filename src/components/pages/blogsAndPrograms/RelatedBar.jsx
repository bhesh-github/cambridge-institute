import { useNavigate } from "react-router-dom";

const RelatedBar = ({ blogsAndProgramsList }) => {
  const navigate = useNavigate();
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
    <div className="related-bar">
      <div className="bar">
        <div className="heading">Related Blogs & Programs</div>
        <div className="cards-wrapper">
          {blogsAndProgramsList.map((item) => {
            const { id = "", name = "", created_at = "" } = item;
            const slug = "asdfasdf";
            return (
              <div className="blogs-programs-card" key={id} title={name}>
                <span className="text-wrapper">
                  <div
                    className="title"
                    onClick={() => {
                      navigate(`/blogs-programs/guiding-the-path-of-students`);
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
      </div>
    </div>
  );
};

export default RelatedBar;
RelatedBar.defaultProps = {
  blogsAndProgramsList: [
    {
      id: 0,
      name: "Guiding the path for students to obtain their visas.",
      image_link: "",
    },
    {
      id: 1,
      name: "Socializing and Organizing every activities under one circle and Solving early Studies. ",
      image_link: "",
    },
    {
      id: 2,
      name: "Guiding the path for students to obtain their visas.",
      image_link: "",
    },
    {
      id: 3,
      name: "Guiding the path for students to obtain their visas.",
      image_link: "",
    },
  ],
};
