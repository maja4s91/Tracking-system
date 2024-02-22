import "./employees.css";
import { useSelector } from "react-redux";

const EmployeesList = () => {
  const { employeesArr } = useSelector((state) => state.employees);
  employeesArr.forEach((e) => console.log(e.employee));

  if (!employeesArr) return;

  return (
    <ul className="lists-added-employee flex-column">
      {employeesArr.map((e) => (
        <li className="employee-info">
          <p className="id-empl">{e.employee.id}</p>
          <p className="fullname">{e.employee.fullName}</p>
          <p className="email">{e.employee.email}</p>
          <p className="phone-number">{e.employee.phoneNumber}</p>
          <p className="birth-date">{e.employee.birthDay}</p>
          <p className="monthly-salary">{e.employee.salary}</p>

          <button className="btn-delete">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeesList;
