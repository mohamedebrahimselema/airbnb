import React, { useState, useEffect } from "react";
import "../Header2/Header2.css";
import HeaderCenter from "./Header-center/HeaderCenter";
import HeaderRight from "./Header-right/HeaderRight";
import DatePicker from "./Header-center/DatePicker";

const Header2 = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const top = window.scrollY < 100;

  //     if (top !== isTop) {
  //       setIsTop(top);
  //     }
  //   });
  // }, [isTop]);

  const showdate = search => {
    setShowSearch(search);
  };
  const startDate = start => {
    setStart(start);
  };
  const endDate = end => {
    setEnd(end);
  };

  return (
    <>
      <div className="header2">
        <div className="header2__icon">
          <img
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </div>
        <HeaderCenter show={showdate} startValue={start} endValue={end} />
        <HeaderRight />
        {showSearch && <DatePicker startDate={startDate} endDate={endDate} />}
      </div>
    </>
  );
};

export default Header2;
