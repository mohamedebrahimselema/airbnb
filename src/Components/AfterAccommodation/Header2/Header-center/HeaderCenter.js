import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const HeaderCenter = props => {
  const [showSearch, setShowSearch] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const clickHandler = () => {
    setShowSearch(!showSearch);
    props.show(!showSearch);
    console.log(props.show);
  };
  const locationHandler = e => {
    setLocation(e.target.value);
  };
  const guestsHandler = e => {
    setGuests(e.target.value);
  };
  return (
    <>
      <div className="header2__center">
        <p>Places to stay</p>
        <hr />

        <div className="header2__center__search">
          <input
            type="text"
            placeholder="Where are you going?"
            name="location"
            value={location}
            onChange={locationHandler}
          />
          <input
            type="text"
            placeholder="Add dates"
            name="check in"
            onClick={clickHandler}
            value={props.startValue}
          />
          <input
            type="text"
            placeholder="Add dates"
            name="check out"
            onClick={clickHandler}
            value={props.endValue}
          />
          <input
            type="text"
            placeholder="Add guests"
            name="guests"
            value={guests}
            onChange={guestsHandler}
          />
          <SearchIcon className="header2__center__search__searchIcon" />
        </div>
      </div>
    </>
  );
};

export default HeaderCenter;
