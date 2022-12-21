import React from "react";
import { icons } from "../../data/icons";

function Settings({ click }) {
  return (
    <div className="settings" onClick={click}>
      {icons.settings}
    </div>
  );
}

export default Settings;
