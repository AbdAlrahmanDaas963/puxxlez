import React from "react";
import "./levels.css";
import lvl0 from "../../data/assets/levels/lvl0/full.png";
import lvl1 from "../../data/assets/levels/lvl1/full.png";

import BackMain from "../../components/BackMain";
import CardLevel from "../../components/common/CardLevel";

function Levels() {
  const levels = [
    { id: 0, img: lvl0 },
    { id: 1, img: lvl1 },
  ];
  return (
    <div className="levels">
      <BackMain />

      {levels.map((item) => (
        <CardLevel key={item.id} lvl={item.id} img={item.img} />
      ))}
    </div>
  );
}

export default Levels;
