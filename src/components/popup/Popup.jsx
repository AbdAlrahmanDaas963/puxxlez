import React from "react";
import "./popup.css";
import { icons } from "./../../data/icons";

import Button from "../common/Button";

function Popup({ pop }) {
  const btns = [
    { icon: icons.dark, title: "night", to: "" },
    { icon: icons.cat, title: "meow", to: "" },
    { icon: icons.sound, title: "sound", to: "" },
    { icon: icons.home, title: "back", to: "" },
  ];
  if (!pop) return null;
  return (
    <div className="popup">
      <div className="popup-content">
        {btns.map((item) => (
          <Button key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default Popup;
