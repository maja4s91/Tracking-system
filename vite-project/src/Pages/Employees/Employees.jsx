import EmployeesList from "./EmployeesList";
import "./employees.css";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <section className="section-employee">
      <div className="heading-employees">
        <h2 className="emp-heading">Employees</h2>
        <Link to={"./form"} className="btn btn-success">
          Create
        </Link>
      </div>
      <ul className="lists-employee">
        <li className="header-employee">
          <p className="empl-id">ID</p>
          <p className="fullname">Full name</p>
          <p className="email">Email</p>
          <p className="phone-number">Phone number</p>
          <p className="birth-date">Date of birth</p>
          <p className="monthly-salary">Monthly salary</p>
        </li>
      </ul>

      <EmployeesList />
    </section>
  );
};

export default Employees;
