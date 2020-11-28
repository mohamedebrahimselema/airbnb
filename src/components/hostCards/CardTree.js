import React from "react";
function CardTree() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/d95dc425-2606-4727-9a2b-861709479fb9.jpg?im_q=highq&amp;im_w=960",
    title: "Ryo",
    details: "Hosts a farm stay in Komatsu",
    checkout: "Check out some farm stays",
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
export default CardTree;
