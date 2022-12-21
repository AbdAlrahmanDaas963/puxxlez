import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { render } from "../../features/cards/cardsSlice";

function CardLevel({ lvl, img }) {
  const disptach = useDispatch();
  console.log("lvl", lvl);
  const handleClick = () => {
    disptach(render(lvl));
  };
  return (
    <div className="card-level" onClick={handleClick}>
      <Link to={"/game"}>
        <img src={img} alt="" width={"100%"} height={"100%"} />
      </Link>
    </div>
  );
}

export default CardLevel;
