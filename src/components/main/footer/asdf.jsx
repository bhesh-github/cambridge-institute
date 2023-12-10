import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { RxCross2 } from "react-icons/rx";
import logo from "../../images/logo/color-logo.png";

export default function TemporaryDrawer({ state, setState, menuItems }) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState && setState({ ...(state && state), [anchor]: open });
  };

  const navigate = useNavigate();

  const list = (anchor) => (
    <div
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "pink !important", width: "350px !important" }}
    >
      <div
        className="sidebar-logo"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#064267",
          padding: "20px",
        }}
      >
        {/* <div
          className="logo"
        > */}
        <img
          style={{ width: "150px !important", maxWidth: "150px !important" }}
          src={logo}
          alt=""
          className="side-logo"
          onClick={() => {
            navigate("/");
          }}
        />
        {/* </div> */}
        <RxCross2 className="cancel" />
      </div>
      <Divider />
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
            const navlinkPath = path;
            return (
              <NavLink
                key={id}
                to={path}
                className="nav-link"
                activeClassName="active-link"
              >
                {title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            style={{ backgroundColor: "pruple !important" }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
