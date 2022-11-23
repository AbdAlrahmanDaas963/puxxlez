import { createSlice } from "@reduxjs/toolkit";

import { grids } from "../../data";

const initialState = grids;

const gridsSlice = createSlice({
  name: "grids",
  initialState,
  reducers: {
    gridAdded(state, action) {
      const { id, img } = action.payload;
      const existingCard = state.find((card) => card.id === id);
      if (existingCard) existingCard.img = img;
    },
  },
});

export const { gridAdded } = gridsSlice.actions;

export const selectAllGrid = (state) => state.grids;

export default gridsSlice.reducer;
