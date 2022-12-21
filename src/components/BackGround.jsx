import React from "react";
import { motion } from "framer-motion";

import img1 from "../data/assets/back/dark/1.png";
import img2 from "../data/assets/back/dark/2.png";
import img3 from "../data/assets/back/dark/3.png";
import img4 from "../data/assets/back/dark/4.png";

function BackGround() {
  return (
    <div className="back-ground">
      <img
        className="back-img back-img1"
        src={img1}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <img
        className="back-img back-img2"
        src={img2}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <motion.img
        className="back-img back-img3"
        src={img3}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <motion.img
        className="back-img back-img4"
        src={img4}
        alt=""
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}

export default BackGround;
