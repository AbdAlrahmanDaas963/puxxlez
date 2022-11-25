import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complate: "",
  right: "",
};

const winSlice = createSlice({
  name: "win",
  initialState,
  reducers: {
    addComplate(state, action) {
      const { statu } = action.payload;
      return statu;
    },
    addRignt(state, action) {
      const { right } = action.payload;
      return right;
    },
  },
});
