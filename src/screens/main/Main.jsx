import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

import Button from "../../components/common/Button";
import BackMain from "../../components/BackMain";

function Main() {
  return (
    <div className="main">
      <BackMain />
      <div className="big-header">
        <h1>PUXXLEZ</h1>
      </div>
      <div className="main-btns">
        <Link to={"/game"}>
          <Button title={"start"} />
        </Link>
        <Link to={"/levels"}>
          <Button title={"levels"} />
        </Link>
      </div>
    </div>
  );
}

export default Main;
