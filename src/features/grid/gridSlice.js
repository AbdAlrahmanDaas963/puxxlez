import { createSlice } from "@reduxjs/toolkit";

import { grids } from "../../data";

const initialState = grids;

const gridsSlice = createSlice({
  name: "grids",
  initialState,
  reducers: {
    gridAdded(state, action) {
      const { id, img, was } = action.payload;
      const existingCard = state.find((card) => card.id === id);
      if (existingCard) {
        existingCard.img = img;
        existingCard.was = was;
      }
    },
    gridDelete(state, action) {
      const { id } = action.payload;
      const existingGrid = state.find((card) => card.id === id);
      if (existingGrid) existingGrid.img = null;
    },
  },
});

export const { gridAdded, gridDelete } = gridsSlice.actions;

export const selectAllGrid = (state) => state.grids;

export default gridsSlice.reducer;
