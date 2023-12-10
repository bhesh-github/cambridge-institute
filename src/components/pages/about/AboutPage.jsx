import img from "../../../images/banner/gallery.jpg";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";
import OtherBanner from "../../forAll/OtherBanner";

const AboutPage = () => {
  return (
    <div className="about-page">
      <OtherBanner bannerImg={img} text="About Us" />
      <div className="content-wrapper">
        <div className="intro-wrapper">
          <h1 className="intro-heading">Introduction</h1>
          <p className="intro-desc">
            We are the firm that has demonstrated a ceaseless commitment to the
            professional development of its personnel, resources and facilities.
            This commitment lies at the core of our ethos and has been
            instrumental in shaping our success. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Saepe debitis mollitia sint
            reprehenderit dicta voluptate facilis, aliquid dolores qui beatae
            hic odit accusantium ipsum consequuntur nisi sequi exercitationem
            possimus excepturi, laudantium eveniet eius perspiciatis vel
            consequatur. Praesentium blanditiis officia saepe! Suscipit deserunt
            nisi magnam. Officiis fugiat voluptatem facere tempore quia labore.
            Nobis modi natus atque ipsum et? Illum repudiandae, soluta quam
            alias unde debitis, voluptatibus maxime, dignissimos at dolorum enim
            numquam aspernatur porro cum veritatis cupiditate.
          </p>
        </div>
        <div className="message-from-director">
          <h1 className="head">Message From Director</h1>
          <div className="text-wrapper">
            <p className="desc">
              <img
                src="https://keydifferences.com/wp-content/uploads/2021/10/managing-director-vs-whole-time-director.jpg"
                alt=""
                className="director-img"
              />
              We are the firm that has demonstrated a ceaseless commitment to
              the professional development of its personnel, resources and
              facilities. This commitment lies at the core of our ethos and has
              been instrumental in shaping our success. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Saepe debitis mollitia sint
              reprehenderit dicta voluptate facilis, aliquid dolores qui beatae
              hic odit accusantium ipsum consequuntur nisi sequi exercitationem
              possimus excepturi, laudantium eveniet eius perspiciatis vel
              consequatur. Praesentium blanditiis officia saepe! Suscipit
              deserunt nisi magnam. Officiis fugiat voluptatem facere tempore
              quia labore. Nobis modi natus atque ipsum et? Illum repudiandae,
              soluta quam alias unde debitis, voluptatibus maxime, dignissimos
              at dolorum enim numquam aspernatur porro cum veritatis
              cupiditate.We are the firm that has demonstrated a ceaseless
              commitment to the professional development of its personnel,
              resources and facilities. This commitment lies at the core of our
              ethos and has been instrumental in shaping our success. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis
              mollitia sint reprehenderit dicta voluptate facilis, aliquid
              dolores qui beatae hic odit accusantium ipsum consequuntur nisi
              sequi exercitationem possimus excepturi, laudantium eveniet eius
              perspiciatis vel consequatur. Praesentium blanditiis officia
              saepe! Suscipit deserunt nisi magnam. Officiis fugiat voluptatem
              facere tempore quia labore. Nobis modi natus atque ipsum et? Illum
              repudiandae, soluta quam alias unde debitis, voluptatibus maxime,
              dignissimos at dolorum enim numquam aspernatur porro cum veritatis
              cupiditate.We are the firm that has demonstrated a ceaseless
              commitment to the professional development of its personnel,
              resources and facilities. This commitment lies at the core of our
              ethos and has been instrumental in shaping our success. Lorem,
            </p>
          </div>
        </div>
        <div className="mission-vision-sec">
          <div className="mission-vision-card">
            <GiStairsGoal className="mv-icon" />
            <div className="text-wrapper">
              <h1 className="card-head">Mission</h1>
              <p className="desc">
                Our mission is to connect Nepali students with foreign
                universities, leveraging our extensive network to facilitate
                this educational connection and bridge the gap between advanced
                education opportunities and Nepali students, thereby empowering
                them to pursue their academic dreams on a global scale. Our
                mission is to connect Nepali students with foreign universities,
                leveraging our extensive network to facilitate this educational
                connection and bridge the gap between advanced education
                opportunities and Nepali students, thereby empowering them to
                pursue their academic dreams on a global scale.
              </p>
            </div>
          </div>
          <div className="mission-vision-card">
            <GoGoal className="mv-icon" />
            <div className="text-wrapper">
              <h1 className="card-head">Vision</h1>
              <p className="desc">
                Our commitment to students seeking to study abroad encompasses
                three core components. Firstly, we offer a seamless path to
                international education, simplifying the often complex process.
                Secondly, our dedication to providing dependable study visa
                support ensures that students can navigate the visa application
                process with confidence, knowing they have reliable assistance
                at every step. Lastly, our language ability test coaching equips
                students with the expertise needed to excel in language
                proficiency exams, a crucial aspect of their international
                academic journey. Together, these elements form a comprehensive
                approach to fulfilling students aspirations for overseas
                education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
