import "./navbar.scss";
import Logo from "../../images/brandTransparent.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import React, { useState } from "react";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="right">
          <div className="iconItem">
            <Tippy content="GitHub">
              <GitHubIcon className="icon" />
            </Tippy>
          </div>
          <div className="iconItem">
            <Tippy content="LinkedIn">
              <LinkedInIcon className="icon" />
            </Tippy>
          </div>
          <div className="iconItem">
            <Tippy content="Resume">
              <InsertDriveFileIcon className="icon" />
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};
