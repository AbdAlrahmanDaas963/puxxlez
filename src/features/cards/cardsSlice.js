import { createSlice } from "@reduxjs/toolkit";

import { cards } from "../../data";

const initialState = cards;

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardRemoved(state, action) {
      const { cardId } = action.payload;
      // const existingCard = state.find((card) => card.id === cardId);
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
