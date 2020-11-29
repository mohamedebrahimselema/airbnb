import React, { useState } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import { Dropdown } from "reactstrap";

function HeaderRight() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
      <div className="header2__right">
        <a href="/">
          <p>Become a Host</p>
        </a>
        <div className="header2__right__currency">
          <LanguageIcon />
        </div>
        <div className="header2__right__icons">
          <div className="header2__right__profileIcons" onClick={toggle}>
            <DehazeIcon />
            <AccountCircleIcon />
          </div>
          {dropdownOpen && (
            <ul>
              <a href="/">
                <li>Login</li>
              </a>
              <a href="/">
                {" "}
                <li>Signup</li>
                <hr/>
              </a>
              <a href="/">
                <li>Host Your Home</li>
              </a>
              <a href="/">
                {" "}
                <li>Help</li>
              </a>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default HeaderRight;
