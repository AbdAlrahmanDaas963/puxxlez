import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllGrid } from "../features/grid/gridSlice";

const WinCheck = () => {
  const [counter, setCounter] = useState();
  const grids = useSelector(selectAllGrid);
  const length = grids.length;

  // grids.foreach((element) => (element.was ? setCounter(counter++) : null));

  if (counter === length) {
    console.log("all Complate");
  } else {
    console.log("not yet");
    setCounter(0);
  }
  return counter;
};

export default WinCheck;
