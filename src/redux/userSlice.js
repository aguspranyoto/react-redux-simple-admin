import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "agus",
  email: "agusprnyt@gmail.com",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
  },
});

export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
