import React from "react";
function CardFour() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/e4ad8c8e-ccf9-473c-856b-0b3c5dfe0662.jpg?im_q=highq&amp;im_w=960",
    title: "Nancy",
    details: "Hosts a private room in San Francisco",
    checkout: "Check out some private rooms",
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
