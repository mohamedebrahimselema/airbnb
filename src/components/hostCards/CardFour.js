import React from "react";
function CardFour() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/17d27522-7f79-4a82-9225-74c737800641.jpg?im_q=highq&amp;im_w=960",
    title: "Sophie",
    details: "Hosts a loft in Paris",
    checkout: "Check out some lofts",
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
export default CardFour;
