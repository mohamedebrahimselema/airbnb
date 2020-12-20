import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

import { DateRange } from "react-date-range";
import "./DatePicker.css";
const DatePicker = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const handleDate = () => {
    props.startDate(format(startDate, "MMM d ,YYY"));
    props.endDate(format(endDate, "MMM d ,YYY"));
  };
  handleDate();

  return (
    <div className="datePicker">
      <DateRange ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
};

export default DatePicker;
