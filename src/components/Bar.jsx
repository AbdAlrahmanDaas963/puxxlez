import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { handeAdded } from "../features/hande/handeSlice";
import { selectAllCards } from "../features/cards/cardsSlice";

import Card from "./common/Card";

export default function Bar() {
  let cards = useSelector(selectAllCards);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(
      handeAdded({ type: "select", cardId: item.id, cardImg: item.img })
    );
  };

  return (
    <div className="bar">
      {cards.map((item) => (
        <div onClick={() => handleClick(item)} key={item.id}>
          <Card num={item.id} img={item.img} />
        </div>
      ))}
    </div>
  );
}
