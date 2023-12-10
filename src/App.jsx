import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.scss";
import Header from "./components/main/Header";
import Footer from "./components/main/footer/Footer";
import NoPage from "./components/pages/error/Oops";
import ScrollToTopBtn from "./components/forAll/ScrollToTopBtn";
import ScrollToTop from "./components/forAll/ScrollToTop";

import HomePage from "./components/pages/home/HomePage";
import AboutUs from "./components/pages/about/AboutPage";
import StudyAbroad from "./components/pages/studyAbroad/StudyAbroad";
import OurCourses from "./components/pages/ourCourses/OurCourses";
import Gallery from "./components/pages/gallery/Gallery";
import GalleryImages from "./components/pages/gallery/galleryImages/GalleryImages";
import Contact from "./components/pages/contact/Contact";
import Downloads from "./components/pages/downloads/Downloads";
import BlogsAndProgramsDetail from "./components/pages/blogsAndPrograms/BlogsAndProgramsDetail";
// import BlogsAndProgramsDetail from "./components/pages/blogsAndPrograms/BlogsAndProgramsDetail";
// import Collapse from "./components/main/Accordion";
// import Resources from "./components/pages/resources/Resources";
// import Popup from "./components/forAll/Popup";
// import GalleryImages from "./components/pages/gallery/GalleryImages";
// import TeamMembers from "./components/pages/teamMembers/TeamMembers";
// import NewsAndBlogs from "./components/pages/newsAndBlogs/NewsAndBlogs";
// import ApplyNow from "./components/pages/applyNow/ApplyNow";
// import ApplyNow from "./components/pages/applyNow/ApplyNow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback="Loading...">
          {/* <Popup /> */}

          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route
                path="study-abroad/:countrySlug"
                element={<StudyAbroad />}
              />
              <Route
                path="our-courses/:courseSlug/:bridgeCourseTab"
                element={<OurCourses />}
              />
              <Route path="contact-us" element={<Contact />} />
              <Route path="gallery" element={<Gallery />} />
              <Route
                path="gallery/:galleryName/images"
                element={<GalleryImages />}
              />
              <Route path="/downloads" element={<Downloads />} />

              {/* <Route path="resources/:resourcesSlug" element={<Resources />} /> */}
              {/* <Route path="members" element={<TeamMembers />} /> */}
              <Route
                path="blogs-programs/:slug"
                element={<BlogsAndProgramsDetail />}
              />
              {/* <Route path="news-blogs" element={<NewsAndBlogs />} /> */}
              {/* <Route path="apply-now" element={<ApplyNow />} /> */}
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
          <ScrollToTopBtn />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
