import { configureStore } from "@reduxjs/toolkit";
import { reducer as employeesReducer } from "./slices/employeesSlice";
import { reducer as tasksReducer } from "./slices/tasksSlice";
import { reducer as epicReducer } from "./slices/epicSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
    tasks: tasksReducer,
    epic: epicReducer,
  },
});
