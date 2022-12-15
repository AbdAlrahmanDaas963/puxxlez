import { createSlice } from "@reduxjs/toolkit";

import { lvl0 } from "../../data/imges";
import { lvl1 } from "../../data/imges";

const initialState = lvl1;

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardRemoved(state, action) {
      const { cardId } = action.payload;
      return state.filter((todo) => todo.id !== cardId);
    },
    cardRestored(state, action) {
      state.push(action.payload);
    },
    render(state, action) {
      const lvl = action.payload;
      switch (lvl) {
        case 0:
          return lvl0;
          break;
        case 1:
          return lvl1;
          break;

        default:
          return lvl1;
          break;
      }
    },
  },
});

export const { cardRemoved, cardRestored, render } = cardsSlice.actions;

export const selectAllCards = (state) => state.cards;
export const selectSelectedLevel = (state) => state.cards.level;

export default cardsSlice.reducer;
