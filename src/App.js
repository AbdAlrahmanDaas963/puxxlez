import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllGrid } from "./features/grid/gridSlice";
import "./App.css";

import Container from "./components/Container";
import Bar from "./components/Bar";

function App() {
  const grids = useSelector(selectAllGrid);
  const result = grids.filter((grid) => grid.solved);
  console.log("length", result.length);

  useEffect(() => {
    if (result.length === 15) {
      alert("win");
    } else {
      console.log("first");
    }
  }, [result]);

  return (
    <div className="App">
      <Container />
      <Bar />
    </div>
  );
}

export default App;
