import React from "react";
import "./levels.css";

import BackMain from "../../components/BackMain";
import CardLevel from "../../components/common/CardLevel";

function Levels() {
  return (
    <div className="levels">
      <BackMain />

      <CardLevel lvl={0} />
      <CardLevel lvl={1} />
    </div>
  );
}

export default Levels;
