import BlogsCarousel from "./BlogsCarousel";

const BlogsAndPrograms = ({ blogsAndProgramsList }) => {
  let pairList = [];
  if (blogsAndProgramsList) {
    for (let i = 0; i < blogsAndProgramsList.length - 1; i++) {
      if (i === 0) {
        let pairObj = [];
        blogsAndProgramsList[i] && pairObj.push(blogsAndProgramsList[i]);
        blogsAndProgramsList[i + 1] &&
          pairObj.push(blogsAndProgramsList[i + 1]);
        pairList.push(pairObj);
      } else {
        let pairObj = [];
        blogsAndProgramsList[i + 1] &&
          pairObj.push(blogsAndProgramsList[i + 1]);
        blogsAndProgramsList[i + 2] &&
          pairObj.push(blogsAndProgramsList[i + 2]);
        pairList.push(pairObj);
      }
    }
  }
  // console.log(pairList && pairList);

  return (
    <div className="blogs-and-programs">
      <div className="bar">
        <div className="head">Blogs & Programs</div>
        <div className="cards-wrapper">
          <BlogsCarousel pairList={pairList && pairList} />
        </div>
      </div>
    </div>
  );
};

export default BlogsAndPrograms;
BlogsAndPrograms.defaultProps = {
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
    {
      id: 4,
      name: "Socializing and Organizing every activities under one circle and Solving early Studies. ",
      image_link: "",
    },
    {
      id: 5,
      name: "Guiding the path for students to obtain their visas.",
      image_link: "",
    },
  ],
};
