import { useNavigate } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import logo from "../../assets/images/company_profile/logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({ sidebarClass, setSidebarClass, menuItems }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-comp" style={{ left: `${sidebarClass}` }}>
      <div
        className="sidebar-header-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#064267",
          padding: "20px",
        }}
      >
        <img
          style={{ width: "150px !important", maxWidth: "150px !important" }}
          src={logo}
          alt=""
          className="side-logo"
          onClick={() => {
            navigate("/");
            setSidebarClass("-50em");
          }}
        />
        {/* </div> */}
        <TfiClose
          className="close-icon"
          onClick={() => {
            setSidebarClass("-50em");
          }}
        />
      </div>
      <div className="menu-item">
        <div
          className="menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "#064267",
            marginTop: "0.4em",
          }}
        >
          {menuItems.map((item) => {
            const { id = "", path = "", title = "", sublinks = "" } = item;
            if (title === "Study Abroad") {
              return (
                <div key={id}>
                  <div className="item-link-wrapper">
                    <div
                      className="item-link btn btn-primary collapsed"
                      data-bs-toggle="collapse"
                      href="#studyAbroad"
                      role="button"
                      aria-expanded="false"
                      aria-controls="studyAbroad"
                    >
                      {title}
                    </div>
                    <MdOutlineKeyboardArrowRight
                      className="drop-arrow"
                      data-bs-toggle="collapse"
                      href="#studyAbroad"
                    />
                  </div>
                  <div className="multi-collapse collapse" id="studyAbroad">
                    {sublinks &&
                      sublinks.map((item) => {
                        const { id = "", title = "", path = "" } = item;
                        return (
                          <div
                            className="child-link"
                            key={id}
                            onClick={() => {
                              setSidebarClass("-50em");
                              navigate(`/study-abroad/${path}`);
                            }}
                          >
                            {title}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            } else if (title === "Our Courses") {
              return (
                <div key={id}>
                  <div className="item-link-wrapper">
                    <div
                      className="item-link btn btn-primary collapsed"
                      data-bs-toggle="collapse"
                      href="#preprationClasses"
                      role="button"
                      aria-expanded="false"
                      aria-controls="preprationClasses"
                    >
                      {title}
                    </div>
                    <MdOutlineKeyboardArrowRight
                      className="drop-arrow"
                      data-bs-toggle="collapse"
                      href="#preprationClasses"
                    />
                  </div>
                  <div
                    className="multi-collapse collapse"
                    id="preprationClasses"
                  >
                    {sublinks &&
                      sublinks.map((item) => {
                        const { id = "", title = "", path = "" } = item;
                        return (
                          <div
                            className="child-link"
                            key={id}
                            onClick={() => {
                              setSidebarClass("-50em");
                              navigate(`/preparation-classes/${path}`);
                            }}
                          >
                            {title}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="item-link-wrapper"
                  key={id}
                  onClick={() => {
                    setSidebarClass("-50em");
                    navigate(path);
                  }}
                >
                  <div className="item-link active-link">{title}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
