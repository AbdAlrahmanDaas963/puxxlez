import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const levelsSlice = createSlice({
  name: "levels",
  initialState,
  reducers: {
    //
  },
});

export const selectAllCards = (state) => state.cards;

export default levelsSlice.reducer;
