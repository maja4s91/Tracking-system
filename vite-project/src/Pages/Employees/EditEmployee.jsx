import "./editEmployee.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as employeesActions } from "../../global/slices/employeesSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const EditEmployee = () => {
  const isActive = true;
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { employeesArr, editEmployeeId } = useSelector(
    (state) => state.employees
  );

  //1. Handle the form close button
  const handleClose = () => nav("/employees");

  //2. Finding employee for editing
  let editEmployee = employeesArr.filter(
    (e) => e.employee.id === editEmployeeId
  )[0];

  if (!editEmployee) return;

  //3. Filling form data of employee for editing
  const [state, setState] = useState({
    id: editEmployee.employee.id,
    fullName: editEmployee.employee.fullName,
    email: editEmployee.employee.email,
    phoneNumber: editEmployee.employee.phoneNumber,
    birthDay: editEmployee.employee.birthDay,
    salary: editEmployee.employee.salary,
  });

  // //3. Getting edited form input data
  const handleTypo = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  //4. Submitting form and adding new edited state object(input data) to redux
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(employeesActions.editEmployee(state));
    nav("/employees");
  };

  return (
    <form className="form-create">
      <button className="btn-close" onClick={handleClose}>
        <ion-icon className="icon-close" name="close-outline"></ion-icon>
      </button>
      <div className="input-empl">
        <label htmlFor="full-name">Full name</label>
        <input
          value={state.fullName}
          onChange={handleTypo}
          name="fullName"
          className="full-name"
          type="text"
          placeholder="Maja Djordjevic"
          required
        />
      </div>

      <div className="input-empl">
        <label htmlFor="i-email">Email</label>
        <input
          value={state.email}
          onChange={handleTypo}
          name="email"
          className="i-email"
          type="i-email"
          placeholder="me@example.com"
          required
        />
      </div>
      <div className="input-empl">
        <label htmlFor="phone">Phone number</label>
        <input
          value={state.phoneNumber}
          onChange={handleTypo}
          name="phoneNumber"
          className="phone"
          type="phone"
          placeholder="+381695666301"
          required
        />
      </div>
      <div className="input-empl">
        <label htmlFor="birth">Date of birth</label>
        <input
          value={state.birthDay}
          onChange={handleTypo}
          name="birthDay"
          className="birth"
          type="date"
          placeholder="23/1/1996"
          required
        />
      </div>
      <div className="input-empl">
        <label htmlFor="salary">Monthly salary</label>
        <input
          value={state.salary}
          onChange={handleTypo}
          name="salary"
          className="salary"
          type="salary"
          placeholder="400e"
          required
        />
      </div>

      {!isActive && (
        <button type="submit " className="submit">
          Submit
        </button>
      )}

      {isActive && (
        <button onClick={handleEdit} type="edit" className="btn-edit">
          Edit
        </button>
      )}
    </form>
  );
};

export default EditEmployee;
