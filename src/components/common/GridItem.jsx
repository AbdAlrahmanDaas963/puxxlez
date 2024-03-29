import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { selectAllHande, handeFree } from "../../features/hande/handeSlice";
import {
  gridAdded,
  gridDelete,
  selectAllGrid,
} from "../../features/grid/gridSlice";
import { cardRemoved, cardRestored } from "../../features/cards/cardsSlice";

export default function GridItem({ num, gridImg }) {
  const handes = useSelector(selectAllHande);
  const grids = useSelector(selectAllGrid);
  const dispatch = useDispatch();

  const img = handes.select.cardImg;
  const cardId = handes.select.cardId;

  const handleClick = () => {
    if (!grids[num].img) {
      dispatch(gridAdded({ id: num, img, was: cardId }));
      dispatch(cardRemoved({ cardId }));
      dispatch(handeFree());
    }
  };
  const handleDelete = () => {
    const target = grids.find((item) => item.id === num);

    if (grids[target.id].img === null || img) {
      return;
    }
    dispatch(handeFree());
    dispatch(gridDelete({ id: num }));
    dispatch(cardRestored({ id: target.was, img: gridImg, solved: false }));
  };

  const scale = gridImg ? 1 : 0;
  return (
    <div onClick={handleClick} className="grid-item-in">
      <motion.img
        animate={{ scale }}
        transition={{ easings: "ease", duration: "0.1" }}
        className="grid-img"
        src={gridImg}
        alt=""
        width={"50px"}
        height={"50px"}
        onClick={handleDelete}
      />
    </div>
  );
}
