import React from "react";
function CardTwo() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/8a09fe60-64e5-4461-bb80-aaf8bc3238a7.jpg?im_q=highq&amp;im_w=960",
    title: "Candida & Jeff",
    details: "Host a house in Joshua Tree",
    checkout: "Check out some houses",
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
export default CardTwo;
