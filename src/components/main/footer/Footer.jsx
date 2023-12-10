import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pdfFile from "../../../assets/brochure.pdf";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ bottomLinks }) => {
  const [newDate, setNewDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    setNewDate(year.toString());
  }, []);
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-intro">
          <div className="sec-heading">CAMBRIDGE INSTITUTE</div>
          <div className="columns">
            <div className="f-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit minima dignissimos neque, distinctio,
              inventore dolorum tempore suscipit est placeat quos necessitatibus
              officia, eveniet similique dolorem. Aspernatur ducimus dolores
              ipsam.
            </div>
            <div className="f-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit minima dignissimos neque, distinctio,
              inventore dolorum tempore suscipit est placeat quos necessitatibus
              officia, eveniet similique dolorem. Aspernatur ducimus dolores
              ipsam.
            </div>
            <div className="f-content">
              <div className="social-icons">
                <LuFacebook className="social-icon" />
                <RiTwitterXFill className="social-icon" />
                <FaInstagram className="social-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-links">
          {bottomLinks &&
            bottomLinks.map((item) => {
              const { id = "", linkName = "", navigateTo = "" } = item;
              if (linkName === "Download Brochure") {
                return (
                  <a
                    key={id}
                    href={pdfFile}
                    target="__blank"
                    className="links-content href-link"
                  >
                    <div className="title">{linkName}</div>
                  </a>
                );
              } else {
                return (
                  <div
                    key={id}
                    className="links-content"
                    onClick={() => {
                      navigate(`${navigateTo}`);
                    }}
                  >
                    {linkName}
                  </div>
                );
              }
            })}
        </div>
        <div className="final-footer">
          <div className="copyright">
            ©{newDate} Cambridge Institute | Designed By{" "}
            <a
              href="https://nextaussietech.com/"
              target="_blank"
              rel="noreferrer"
            >
              Next Aussie Tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
Footer.defaultProps = {
  bottomLinks: [
    {
      id: 0,
      linkName: "Home",
      navigateTo: "/",
    },
    {
      id: 1,
      linkName: "About",
      navigateTo: "about-us",
    },
    {
      id: 2,
      linkName: "Gallery",
      navigateTo: "gallery",
    },
    // {
    //   id: 3,
    //   linkName: "Blogs & Programs",
    //   navigateTo: "blogs-and-programs",
    // },
    {
      id: 4,
      linkName: "Downloads",
      navigateTo: "downloads",
    },
    {
      id: 5,
      linkName: "Download Brochure",
      navigateTo: "",
    },
    {
      id: 6,
      linkName: "Contact",
      navigateTo: "contact-us",
    },
  ],
};
