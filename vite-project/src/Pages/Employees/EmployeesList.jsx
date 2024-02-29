import "./employees.css";
import { useDispatch, useSelector } from "react-redux";
import { actions as employeesActions } from "../../global/slices/employeesSlice";
import { useNavigate } from "react-router-dom";

const EmployeesList = () => {
  const { employeesArr } = useSelector((state) => state.employees);

  if (!employeesArr) return;
  const nav = useNavigate();
  const dispatch = useDispatch();

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
              dispatch(employeesActions.getEmployeeId(e.employee.id));
              nav("/employees/edit");
            }}
            className="btn-delete"
          >
            Edit
          </button>

          <button
            onClick={() =>
              dispatch(employeesActions.deleteEmployee(e.employee.id))
            }
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
