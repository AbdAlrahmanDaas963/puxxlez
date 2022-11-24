import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllHande, handeFree } from "../../features/hande/handeSlice";
import {
  gridAdded,
  gridDelete,
  selectAllGrid,
} from "../../features/grid/gridSlice";
import { cardRemoved, cardRestored } from "../../features/cards/cardsSlice";

export default function GridItem({ num, gridImg }) {
  const [state, setState] = useState();
  const handes = useSelector(selectAllHande);
  const grids = useSelector(selectAllGrid);
  const dispatch = useDispatch();

  const isDisabled = gridImg;

  const img = handes.select.cardImg;
  const cardId = handes.select.cardId;

  useEffect(() => {
    setState(cardId);
  }, [cardId]);

  const handleClick = () => {
    dispatch(gridAdded({ id: num, img, was: cardId }));
    dispatch(cardRemoved({ cardId }));
    dispatch(handeFree());
  };
  const handleDelete = () => {
    const target = grids.find((item) => item.id === num);

    dispatch(handeFree());
    dispatch(gridDelete({ id: num }));
    dispatch(cardRestored({ id: target.was, img: gridImg, solved: false }));
  };

  return (
    <button disabled={isDisabled} onClick={handleClick} className="grid-item">
      <img src={gridImg} alt="" width={"50px"} height={"50px"} />
      <div onClick={handleDelete}>delete</div>
    </button>
  );
}
