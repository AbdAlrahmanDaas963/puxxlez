import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { render } from "../../features/cards/cardsSlice";

function CardLevel({ lvl }) {
  const disptach = useDispatch();
  console.log("lvl", lvl);
  const handleClick = () => {
    disptach(render(lvl));
  };
  return (
    <div className="card-level" onClick={handleClick}>
      <Link to={"/game"}>CardLevel</Link>
    </div>
  );
}

export default CardLevel;
