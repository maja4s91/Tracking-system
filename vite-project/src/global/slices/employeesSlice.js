import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "employees",
  initialState: {
    employeesArr: [],
    editEmployeeId: 0,
  },
  reducers: {
    addEmployee(state, { payload: employee }) {
      state.employeesArr.push({ employee });
    },
    deleteEmployee(state, { payload: employeeId }) {
      state.employeesArr = state.employeesArr.filter(
        (e) => e.employee.id !== employeeId
      );
    },
    getEmployeeId(state, { payload: employeeId }) {
      state.editEmployeeId = employeeId;
    },
    editEmployee(state, { payload: employee }) {
      if (!employee) return;

      state.employeesArr.map(
        (e) =>
          (state.employeesArr =
            e.employee.id === employee.id
              ? { ...e.employee, ...employee }
              : { ...e.employee })
      );

      // return edit;
      // console.log(edit);
      // [...state.employeesArr] = [...edit];
      // state.employeesArr = edit;
      // console.log(state.employeesArr);
      // let editedEmployee = state.employeesArr.filter(
      //   (e) => e.employee.id === employee.id
      // )[0];

      // let index = state.employeesArr.indexOf(editedEmployee);
      // console.log(editedEmployee, index);
      // state.employeesArr[index] = { ...employee };
      // state = {
      //   ...state,
      //   employeesArr: [
      //     ...state.employeesArr.slice(0, index),
      //     editedEmployee,
      //     ...state.employeesArr.slice(index + 1),
      //   ],
      // };

      // console.log(add);
    },
  },
});
