// import "./createEmployee.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as employeesActions } from "../../global/slices/employeesSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const Create = () => {
  const [isActive, setIsActive] = useState(true);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { employeesArr } = useSelector((state) => state.employees);
  const employeesFormData = [
    {
      divCol: "col-md-12",
      labelId: "full-name",
      labelName: "Full name",
      nameEm: "fullName",
      typeEm: "text",
      idEm: "full-name",
      placeholderEm: "Jovan Jovanovic",
    },
    {
      divCol: "col-md-5",
      labelId: "emailId",
      labelName: "Email",
      nameEm: "email",
      typeEm: "email",
      idEm: "emailId",
      placeholderEm: "jovan4@gmail.com",
    },
    {
      divCol: "col-md-4",
      labelId: "phoneNumberId",
      labelName: "Phone number",
      nameEm: "phoneNumber",
      typeEm: "text",
      idEm: "phoneNumberId",
      placeholderEm: "+381647961696",
    },
    {
      divCol: "col-md-3",
      labelId: "birthDayId",
      labelName: "Date of birth",
      nameEm: "birthDay",
      typeEm: "date",
      idEm: "birthDayId",
      placeholderEm: "23/1/1996",
    },
    {
      divCol: "col-md-2",
      labelId: "salaryId",
      labelName: "Salary",
      nameEm: "salary",
      typeEm: "text",
      idEm: "salaryId",
      placeholderEm: "1000e",
    },
  ];
  //1. Handle the form close button
  const handleClose = () => nav("/employees");

  //2. Setting state for passing to redux throught handleSubmit

  let id = 0;
  employeesArr.forEach((e) => {
    if (e.employee.id > id) id = e.employee.id;
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
    <div className="container-sm mt-md-5 mt-sm-2  ">
      <form className="row g-3  mt-md-5 mt-sm-2 ">
        <div className="d-flex justify-content-end mb-md-5 mb-sm-0 ">
          <button
            type="button"
            className="btn-close px-sm-2"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
        {employeesFormData.map((d, i) => (
          <div className={d.divCol} key={i}>
            <label htmlFor={d.labelId} className="form-label fs-2">
              {d.labelName}
            </label>
            <input
              onChange={handleTypo}
              name={d.nameEm}
              type={d.typeEm}
              id={d.idEm}
              className="form-control fs-2 mb-md-5 mb-sm-2"
              placeholder={d.placeholderEm}
            />
          </div>
        ))}

        {isActive && (
          <div className="d-flex justify-content-center">
            <button
              onClick={handleSubmit}
              type="submit "
              className="btn btn-success fs-2 "
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Create;
