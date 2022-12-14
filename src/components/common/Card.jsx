import React from "react";

export default function Card({ num, img }) {
  return (
    <div className="card">
      <img src={img} alt="" width={"50px"} height={"50px"} />
      <p>{num}</p>
    </div>
  );
}
