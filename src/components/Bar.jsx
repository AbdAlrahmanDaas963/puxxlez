import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { handeAdded } from "../features/hande/handeSlice";
import { selectAllCards } from "../features/cards/cardsSlice";

import { shuffle } from "d3-array";

import Card from "./common/Card";

export default function Bar() {
  const dispatch = useDispatch();

  let cards = useSelector(selectAllCards);
  let renderCards = [];

  //
  let ids = [];
  for (let i = 0; i < 15; i++) {
    ids.push(i);
  }
  shuffle(ids);
  for (let i = 0; i < 15; i++) {
    console.log(cards[ids[i]]);
    renderCards.push(cards[ids[i]]);
  }
  //

  const handleClick = (item) => {
    // console.log("first", item);
    dispatch(
      handeAdded({ type: "select", cardId: item.id, cardImg: item.img })
    );
  };

  return (
    <div className="bar">
      {renderCards.map((item) => (
        <div onClick={() => handleClick(item)} key={item.id}>
          <Card num={item.id} img={item.img} />
        </div>
      ))}
    </div>
  );
}
