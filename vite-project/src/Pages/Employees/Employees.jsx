import EmployeesList from "./EmployeesList";
import "./employees.css";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <section className="section-employee">
      <div className="heading-employees">
        <h2 className="emp-heading fs-1">Employees</h2>
        <Link to={"./form"} className="btn btn-sm btn-success  fs-2">
          Create
        </Link>
      </div>
    
      <ul className="lists-employee flex-column">
        <li className="header-employee">
          <p className="empl-id fs-4">ID</p>
          <p className="fullname fs-4">Full name</p>
          <p className="email fs-4">Email</p>
          <p className="phone-number fs-4">Phone number</p>
          <p className="birth-date fs-4">Date of birth</p>
          <p className="monthly-salary fs-4">Monthly salary</p>
        </li>
      </ul>

      <EmployeesList />
    </section>
  );
};

export default Employees;
