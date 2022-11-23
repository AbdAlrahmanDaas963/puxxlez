import { createSlice } from "@reduxjs/toolkit";

import { cards } from "../../data";

const initialState = cards;

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardRemoved(state, action) {
      const { cardId } = action.payload;
      const existingCard = state.find((card) => card.id === cardId);
      console.log("existingCard", existingCard);
      return state.filter((todo) => todo.id !== cardId);
    },
  },
});

export const { cardRemoved } = cardsSlice.actions;

export const selectAllCards = (state) => state.cards;

export default cardsSlice.reducer;
