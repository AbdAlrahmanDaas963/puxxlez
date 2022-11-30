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
        className="back-img"
        src={img1}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <img
        className="back-img"
        src={img2}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <motion.img
        animate={{ x: -10 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        className="back-img"
        src={img3}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <motion.img
        animate={{ x: 10 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        className="back-img"
        src={img4}
        alt=""
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}

export default BackGround;
