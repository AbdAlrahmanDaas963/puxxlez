import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { handeAdded } from "../features/hande/handeSlice";
import { selectAllCards } from "../features/cards/cardsSlice";

import { shuffle } from "d3-array";

import Card from "./common/Card";

export default function Bar() {
  const dispatch = useDispatch();

  let cards = useSelector(selectAllCards);

  // ? shuffle not done yet
  let arr = [1, 2, 3, 4, 5];
  // console.log(shuffle(arr));

  const handleClick = (item) => {
    // console.log("first", item);
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
