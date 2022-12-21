import { createSlice } from "@reduxjs/toolkit";

import { hande } from "../../data";

const handeSlice = createSlice({
  name: "hande",
  initialState: hande,
  reducers: {
    handeAdded(state, action) {
      const { type, cardId, cardImg } = action.payload;
      if (type === "select") {
        state.select = action.payload;
      } else {
        state.target = action.payload;
      }
    },
    handeFree(state, action) {
      return {
        select: {},
        target: {},
      };
    },
  },
});

export const { handeAdded, handeFree } = handeSlice.actions;

export const selectAllHande = (state) => state.hande;

export default handeSlice.reducer;
