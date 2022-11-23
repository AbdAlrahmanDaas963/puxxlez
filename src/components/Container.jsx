import React from "react";

import { useSelector } from "react-redux";
import { selectAllGrid } from "../features/grid/gridSlice";

import GridItem from "./common/GridItem";

export default function Container() {
  const grids = useSelector(selectAllGrid);

  console.log("grids: ", grids);
  return (
    <div className="container">
      {grids.map((item) => (
        <div className="grid-item" key={item.id}>
          <GridItem num={item.id} gridImg={item.img} />
        </div>
      ))}
    </div>
  );
}
