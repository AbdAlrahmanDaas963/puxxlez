import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardsSlice";
import gridsReducer from "../features/grid/gridSlice";
import handeReducer from "../features/hande/handeSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    grids: gridsReducer,
    hande: handeReducer,
  },
});
