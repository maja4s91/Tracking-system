import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "employees",
  initialState: {
    employeesArr: [],
    editEmployeeId: 0,
    employeesFormData: [
      {
        divCol: "col-md-12",
        htmlFor: "full-name",
        labelName: "Full name",
        name: "fullName",
        type: "text",
        id: "full-name",
        placeholder: "Jovan Jovanovic",
      },
      {
        divCol: "col-md-5",
        htmlFor: "emailId",
        labelName: "Email",
        name: "email",
        type: "email",
        id: "emailId",
        placeholder: "jovan4@gmail.com",
      },
      {
        divCol: "col-md-4",
        htmlFor: "phoneNumberId",
        labelName: "Phone number",
        name: "phoneNumber",
        type: "text",
        id: "phoneNumberId",
        placeholder: "+381647961696",
      },
      {
        divCol: "col-md-3",
        htmlFor: "birthDayId",
        labelName: "Date of birth",
        name: "birthDay",
        type: "date",
        id: "birthDayId",
        placeholder: "23/1/1996",
      },
      {
        divCol: "col-md-2",
        htmlFor: "salaryId",
        labelName: "Salary",
        name: "salary",
        type: "text",
        id: "salaryId",
        placeholder: "1000e",
      },
    ],
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
    // editEmployee(state, { payload: employee }) {
    //   if (!employee) return;

    //   state.employeesArr.map(
    //     (e) =>
    //       (state.employeesArr =
    //         e.employee.id === employee.id
    //           ? { ...e.employee, ...employee }
    //           : { ...e.employee })
    //   );

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
    // },
  },
});
