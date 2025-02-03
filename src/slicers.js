import { createSlice } from "@reduxjs/toolkit";

const guestNameSlice = createSlice({
  name: "guest",
  initialState: { name: "" },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = guestNameSlice.actions;
export default guestNameSlice.reducer;