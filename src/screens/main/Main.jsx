import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";

import { icons } from "../../data/icons";
import Button from "../../components/common/Button";
import BackMain from "../../components/BackMain";
import Popup from "./../../components/popup/Popup";
import Settings from "../../components/common/Settings";

function Main() {
  const [ispop, setIspop] = useState(false);
  const handleClick = () => {
    const pop = ispop;
    setIspop(!pop);
  };
  return (
    <div className="main lock-scroll">
      <Popup pop={ispop} />
      <Settings click={handleClick} />
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
