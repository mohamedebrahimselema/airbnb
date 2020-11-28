import React from "react";
function CardOne() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/92acd468-73bf-4ca1-a956-277c4a94b3a3.jpg?im_q=highq&amp;im_w=960",
    title: "Darrel",
    details: "Hosts a tiny house in Atlanta",
    checkout: "Check out some tiny houses",
  };
  return (
    <>
      <div>
        <div
          src={hostObj.imgURL}
          alt={hostObj.title}
          className="host-img"
          style={{ backgroundImage: `url(${hostObj.imgURL})` }}
        />
        <h2>{hostObj.title}</h2>
        <span>{hostObj.details}</span>
        <br />
        <div href="#">{hostObj.checkout}</div>
      </div>
    </>
  );
}
export default CardOne;
