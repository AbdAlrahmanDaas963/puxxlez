import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllHande, handeFree } from "../../features/hande/handeSlice";
import { gridAdded } from "../../features/grid/gridSlice";
import { cardRemoved } from "../../features/cards/cardsSlice";

export default function GridItem({ num, gridImg }) {
  const handes = useSelector(selectAllHande);
  const dispatch = useDispatch();

  const isDisabled = gridImg;

  const img = handes.select.cardImg;
  const cardId = handes.select.cardId;

  const handleClick = () => {
    dispatch(gridAdded({ id: num, img }));
    dispatch(cardRemoved({ cardId }));
    dispatch(handeFree());
  };

  return (
    <button disabled={isDisabled} onClick={handleClick} className="grid-item">
      <img src={gridImg} alt="" width={"50px"} height={"50px"} />
    </button>
  );
}
