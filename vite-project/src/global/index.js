import { configureStore } from "@reduxjs/toolkit";
import { reducer as employeesReducer } from "./slices/employeesSlice";
import { reducer as tasksReducer } from "./slices/tasksSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
    tasks: tasksReducer,
  },
});
