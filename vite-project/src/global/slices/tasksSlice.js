import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "tasks",
  initialState: {
    tasksArr: [],
  },
  reducers: {
    addTask(state, { payload: task }) {
      state.tasksArr.push(task);
    },
    deleteTask(state, { payload: taskId }) {
      state.tasksArr = state.tasksArr.filter((t) => t.id !== taskId);
    },
  },
});
