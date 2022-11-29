import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllGrid } from "./features/grid/gridSlice";
import "./App.css";

import Container from "./components/Container";
import Bar from "./components/Bar";

function App() {
  const [counter, setCounter] = useState(1);
  const grids = useSelector(selectAllGrid);

  useEffect(() => {
    for (let index = 0; index < grids.length; index++) {
      const element = grids[index];

      if (element.solved) {
        setCounter(counter + 1);
      }
    }

    console.log("counter", counter);
    if (counter === 15) {
      alert("win");
    } else {
      console.log("not yet");
    }
  }, [grids]);

  return (
    <div className="App">
      <Container />
      <Bar />
    </div>
  );
}

export default App;
