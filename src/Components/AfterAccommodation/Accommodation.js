import React from "react";
import "./Accommodation.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header2 from "./Header2/Header2";
import AccommodationHeader from "./AccommodationHeader/AccommodationHeader";
import AccommodationHost from "./AccommodationHost/AccommodationHost";
import Accomndation from "./Accomndation/Accomndation";
import Footer from "./Footer/Footer";
const Accommodation = () => {
  return (
    <div className="acc ">
      <Header2 />
      <AccommodationHeader />
      <AccommodationHost />
      <Accomndation />
      <Footer />
    </div>
  );
};

export default Accommodation;
