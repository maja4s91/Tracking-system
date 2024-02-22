import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "employees",
  initialState: {
    employeesArr: [],
    employeeForm: {
      fullName: "",
      email: "",
      phoneNumber: 0,
      birthDay: "",
      salary: 0,
    },
  },
  reducers: {
    addEmployee(state, { payload: employee }) {
      state.employeesArr.push({ employee });
    },
  },
});
