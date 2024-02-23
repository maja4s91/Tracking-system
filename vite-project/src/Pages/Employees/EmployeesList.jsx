import "./employees.css";
import { useDispatch, useSelector } from "react-redux";
import { actions as employeesActions } from "../../global/slices/employeesSlice";

const EmployeesList = () => {
  const { employeesArr } = useSelector((state) => state.employees);

  const dispatch = useDispatch();

  // const handleDelete = () => {};

  if (!employeesArr) return;

  return (
    <ul className="lists-added-employee flex-column">
      {employeesArr.map((e, i) => (
        <li className="employee-info" key={i}>
          <p className="id-empl">{e.employee.id}</p>
          <p className="fullname">{e.employee.fullName}</p>
          <p className="email">{e.employee.email}</p>
          <p className="phone-number">{e.employee.phoneNumber}</p>
          <p className="birth-date">{e.employee.birthDay}</p>
          <p className="monthly-salary">{e.employee.salary}</p>

          <button
            onClick={() => {
              dispatch(employeesActions.deleteEmployee(e.employee.id));
            }}
            className="btn-delete"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeesList;
