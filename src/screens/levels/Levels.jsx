import React from "react";
import { Link } from "react-router-dom";
import "./levels.css";

import Button from "../../components/common/Button";
import BackMain from "../../components/BackMain";
import CardLevel from "../../components/common/CardLevel";

function Levels() {
  return (
    <div className="levels">
      <BackMain />

      <CardLevel />
      <CardLevel />
      <CardLevel />
      <CardLevel />
      <CardLevel />
      <CardLevel />
      <CardLevel />
      <CardLevel />
      <CardLevel />
    </div>
  );
}

export default Levels;
