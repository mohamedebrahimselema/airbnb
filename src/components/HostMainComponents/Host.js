import React from "react";
import Carousel from "react-elastic-carousel";
import CardOne from "../hostCards/CardOne";
import CardTwo from "../hostCards/CardTwo";
import CardTree from "../hostCards/CardTree";
import CardFour from "../hostCards/CardFour";
import CardFive from "../hostCards/CardFive";
function Host() {
  const breakPoints = [
    { width: 768, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
  ];

  return (
    <>
      {" "}
      <div className="row mt-5 pb-5">
        <div className="col-xl-4 col-md-6 col-12">
          <div className="host-container">
            <h1 className="host-header">Host your home on Airbnb</h1>
            <div className="host-details">
              <p className="host-parg">
                Join a vibrant community of hosts, create memorable experiences
                for travelers, and earn money to pursue the things you love.
              </p>
            </div>
            <div className="host-btn">
              <button className="getstarted-btn">Get started</button>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-md-6 col-12">
          <Carousel breakPoints={breakPoints}>
            <CardOne />
            <CardTwo />
            <CardTree />
            <CardFour />
            <CardFive />
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default Host;
