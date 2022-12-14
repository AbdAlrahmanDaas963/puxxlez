import { createSlice } from "@reduxjs/toolkit";

import { cards } from "../../data";

import { allLevels } from "../../data/imges";

console.log(allLevels);

const initialState = allLevels[0];

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
  },
});

export const { cardRemoved, cardRestored } = cardsSlice.actions;

export const selectAllCards = (state) => state.cards;

export default cardsSlice.reducer;
