import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "epic",
  initialState: {
    epicArr: [],
  },
  reducers: {
    addEpic(state, { payload: epic }) {
      state.epicArr.push(epic);
    },
    deleteEpic(state, { payload: epicId }) {
      state.epicArr = state.epicArr.filter((e) => e.id !== epicId);
    },
  },
});
