import { configureStore } from "@reduxjs/toolkit";
import { reducer as employeesReducer } from "./slices/employeesSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
