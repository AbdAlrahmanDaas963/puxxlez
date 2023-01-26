import React from "react";
import { motion } from "framer-motion";

export default function Card({ img }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ easings: "ease", duration: "0.1" }}
      className="card"
    >
      <img src={img} alt="" width={"100%"} height={"100%"} />
    </motion.div>
  );
}
