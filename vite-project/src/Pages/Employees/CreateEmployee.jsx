import "./createEmployee.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as employeesActions } from "../../global/slices/employeesSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const CreateEmployee = () => {
  const [isActive, setIsActive] = useState(true);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { employeesArr } = useSelector((state) => state.employees);

  //1. Handle the form close button
  const handleClose = () => nav("/employees");

  //2. Setting state for passing to redux throught handleSubmit

  let id = 0;
  employeesArr.forEach((e, i) => {
    return (id = ++i);
  });

  const [state, setState] = useState({
    id: ++id,
    fullName: "",
    email: "",
    phoneNumber: 0,
    birthDay: "",
    salary: 0,
  });

  //3. Getting form input data
  const handleTypo = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  //4. Submitting form and adding state object(input data) to redux
  const handleSubmit = (e) => {
    e.preventDefault();
    //Send data to redux (add object to redux arrey)
    dispatch(employeesActions.addEmployee(state));
    //Go back to employees page
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
          onChange={handleTypo}
          name="salary"
          className="salary"
          type="salary"
          placeholder="400e"
          required
        />
      </div>

      {isActive && (
        <button onClick={handleSubmit} type="submit " className="submit">
          {" "}
          Submit
        </button>
      )}

      {!isActive && (
        <button type="edit" className="btn-edit">
          Edit
        </button>
      )}
    </form>
  );
};

export default CreateEmployee;
