import { useState } from "react";
import logo from "../../assets/images/company_profile/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Header = ({ menuItems }) => {
  const [isDropdownContainer, setIsDropdownContainer] = useState("");
  const [sidebarClass, setSidebarClass] = useState("-50em");
  sidebarClass === "0"
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");

  const navigate = useNavigate();

  const handleContainerContentClick = () => {
    setIsDropdownContainer("none");
    setTimeout(() => {
      setIsDropdownContainer("");
    }, 100);
  };

  return (
    <>
      <div className="header">
        <div className="contents">
          <BiMenu
            className="toggle-icon"
            onClick={() => {
              setSidebarClass("0");
            }}
          />
          <img
            src={logo}
            alt=""
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="menu-bar">
            <div className="menu">
              {menuItems &&
                menuItems.map((item) => {
                  const {
                    id = "",
                    path = "",
                    title = "",
                    sublinks = "",
                  } = item;
                  const navlinkPath = path;
                  if (!sublinks) {
                    return (
                      <NavLink key={id} to={path} className="nav-item">
                        {title}
                      </NavLink>
                    );
                  } else {
                    return (
                      <div className="dropdown" key={id}>
                        <button className="dropbtn">{title}</button>
                        <div
                          className="hidden-dropdown"
                          style={{
                            display: isDropdownContainer,
                          }}
                        >
                          <div className="dropdown-content">
                            <span className="down-triangle"></span>
                            <div className="sublinks">
                              {sublinks.map((item) => {
                                const { id = "", title = "", path = "" } = item;
                                return (
                                  <div
                                    onClick={() => {
                                      navigate(`${navlinkPath}/${path}`);
                                      handleContainerContentClick();
                                    }}
                                    key={id}
                                    className="drop-item"
                                  >
                                    {title}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <button className="contact-link">
            <div
              className="btn-text"
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              Contact
            </div>
          </button>
        </div>
        <div className="top-full"></div>
      </div>
      {sidebarClass === "0" && (
        <div
          className="back-overlay"
          onClick={() => {
            setSidebarClass("-50em");
          }}
        ></div>
      )}
      <Sidebar
        sidebarClass={sidebarClass}
        setSidebarClass={setSidebarClass}
        menuItems={menuItems && menuItems}
      />
    </>
  );
};

export default Header;
Header.defaultProps = {
  menuItems: [
    {
      id: 0,
      title: "Home",
      path: "/",
    },
    {
      id: 1,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 2,
      title: "Study Abroad",
      path: "/study-abroad",
      sublinks: [
        {
          id: 0,
          title: "Australia",
          path: "australia",
        },
        {
          id: 1,
          title: "Canada",
          path: "canada",
        },
        {
          id: 2,
          title: "USA",
          path: "usa",
        },
      ],
    },
    {
      id: 3,
      title: "Our Courses",
      path: "/our-courses",
      sublinks: [
        {
          id: 100,
          title: "Bridge Course",
          path: "bridge-course/science",
        },
        {
          id: 110,
          title: "St. Xavier's & SOS Entrance Preparation",
          path: "st-xavier-s-and-sos-entrance-preparation/0",
        },
        {
          id: 0,
          title: "IELTS",
          path: "ielts/0",
        },
        {
          id: 1,
          title: "PTE",
          path: "pte/0",
        },
      ],
    },
    {
      id: 4,
      title: "Downloads",
      path: "/downloads",
    },
  ],
};
