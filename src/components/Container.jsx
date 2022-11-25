import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectAllGrid } from "../features/grid/gridSlice";

import GridItem from "./common/GridItem";

export default function Container() {
  const [counter, setCounter] = useState(1);
  const grids = useSelector(selectAllGrid);
  const length = grids.length;

  console.log("counter", counter);
  console.log("length", length);

  if (counter === length) {
    console.log("all Complate");
  } else {
    console.log("not yet");
    // setCounter(0);
  }

  const checkWin = () => {
    // ? move it to its slice
    console.log("checking...");
    grids.forEach((element) => {
      if (element.was) {
        let plus = counter + 1;
        setCounter(plus);
        console.log(counter);
      }
      console.log(element);
    });
  };

  return (
    <div className="container">
      {grids.map((item) => (
        <button disabled={item.img} className="grid-item" key={item.id}>
          <GridItem num={item.id} gridImg={item.img} />
        </button>
      ))}
    </div>
  );
}
