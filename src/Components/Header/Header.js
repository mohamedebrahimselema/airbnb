// import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DatePicker from "../Header2/Header-center/DatePicker";
import "./Header.css";
const Header = props => {
  // const [isclicked, setIsClicked] = useState(false);
  // const click = () => {
  //   setIsClicked(!isclicked);
  // };
  // const clickProp = () => {
  //   props.clickHandler(isclicked);
  // };
  // clickProp();

  return (
    <>
      <div>
        <div className="header__icon">
          <img
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </div>
        <div className="header__center">
          <input type="text" />
          <SearchIcon className="header__center__searchIcon" />
        </div>
        <div className="header__right">
          <p>Switch to hosting</p>
          <div className="header__right__currency">
            <LanguageIcon />
            <ExpandMoreIcon />
          </div>
          <div className="header__right__profileIcons">
            <DehazeIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
