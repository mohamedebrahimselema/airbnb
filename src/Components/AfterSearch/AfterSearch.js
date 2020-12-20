import React from "react";
import Header2 from "./Header2/Header2";
import GoogleMap2 from "./GoogleMap2/GoogleMap2";
import Footer from "./Footer/Footer";
import SearchResults from "./SearchResults/SearchResults";
const AfterSearch = () => {
  return (
    <div>
      <Header2 />
      <GoogleMap2 />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default AfterSearch;
