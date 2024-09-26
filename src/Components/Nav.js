import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import logo from "../images/logo-black.png";
import logoWhite from "../images/bond-logo-white.png";
import walkers from "../images/walkers.png";
import links from "../video-links/links.json";

// This is where the code for the side menu is
const Nav = () => {
  const location = useLocation();
  const isBuyPage = location.pathname === "/CCT001";

  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    return null;
  }

  // Unique nav styling for the buy page only.
  if (isBuyPage) {
    return (
      <div className="nav buy-nav">
        <Link to="/">
          <img width={190} height={76} src={logoWhite} alt="Bond Street logo" />
        </Link>
        <Link
          className="walkers-link"
          to="https://instagram.com/callcentre.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={walkers} alt="Walkers" className="walkers-img" />
        </Link>
      </div>
    );
  }

  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="Bond Street logo" className="logo-nav" />
      </Link>
      <div className="menu nav-menu">
        {/* Buy link */}

        {/* Edit link */}
        <Link to="/edit" className="menu-link nav-menu-link">
          <p className={location.pathname === "/edit" ? "bold-title" : ""}>
            EDIT
          </p>
        </Link>
        {/* Edit sub-menu */}
        {location.pathname === "/edit" &&
          links.edit.map((video) => (
            <div className="sub-menu" key={video.title}>
              <Link
                to={"/edit#" + video.title}
                className="menu-link nav-menu-link sub-link"
              >
                {video.title}
              </Link>
            </div>
          ))}
        {/* Unit link */}
        <Link to="/unit" className="menu-link nav-menu-link">
          <p className={location.pathname === "/unit" ? "bold-title" : ""}>
            UNIT
          </p>
        </Link>

        {/* Unit sub-menu */}
        {location.pathname === "/unit" &&
          links.unit.map((video) => (
            <div className="sub-menu" key={video.title}>
              <Link
                to={"/unit#" + video.title}
                className="menu-link nav-menu-link sub-link"
              >
                {video.title}
              </Link>
            </div>
          ))}
        {/* Misc link */}
        <Link to="/misc" className="menu-link nav-menu-link">
          <p className={location.pathname === "/misc" ? "bold-title" : ""}>
            MISC
          </p>
        </Link>
        {/* Misc sub-menu */}
        {location.pathname === "/misc" &&
          links.misc.map((video) => (
            <div className="sub-menu" key={video.title}>
              <Link
                to={"/misc#" + video.title}
                className="menu-link nav-menu-link sub-link"
              >
                {video.title}
              </Link>
            </div>
          ))}

        {/* Mobile version of sub-menu */}
        {location.pathname === "/edit" &&
          links.edit.map((video) => (
            <div className="sub-menu sub-menu-mobile" key={video.title}>
              <Link
                to={"/edit#" + video.title}
                className="menu-link nav-menu-link sub-link-mobile"
              >
                {video.title}
              </Link>
            </div>
          ))}
        {location.pathname === "/unit" &&
          links.unit.map((video) => (
            <div className="sub-menu sub-menu-mobile" key={video.title}>
              <Link
                to={"/unit#" + video.title}
                className="menu-link nav-menu-link sub-link-mobile"
              >
                {video.title}
              </Link>
            </div>
          ))}
        {location.pathname === "/misc" &&
          links.misc.map((video) => (
            <div className="sub-menu sub-menu-mobile" key={video.title}>
              <Link
                to={"/misc#" + video.title}
                className="menu-link nav-menu-link sub-link-mobile"
              >
                {video.title}
              </Link>
            </div>
          ))}
        <Link to="/CCT001" className="menu-link nav-menu-link">
          <p className={location.pathname === "/CCT001" ? "bold-title" : ""}>
            CCT001
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
