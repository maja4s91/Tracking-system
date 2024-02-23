import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "employees",
  initialState: {
    employeesArr: [],
    employeeForm: {
      id: 0,
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
    deleteEmployee(state, { payload: employee }) {
      state.employeesArr = state.employeesArr.filter(
        (e) => e.employee.id !== employee
      );
    },
  },
});
