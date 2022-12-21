import React from "react";

export default function Card({ num, img }) {
  return (
    <div className="card">
      <img src={img} alt="" width={"100%"} height={"100%"} />
      <p>{num}</p>
    </div>
  );
}
