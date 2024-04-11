// import "./createEmployee.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions as employeesActions } from "../../global/slices/employeesSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const Create=()=>{
    const [isActive, setIsActive] = useState(true);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { employeesArr } = useSelector((state) => state.employees);

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
  }
    return(
      <div className="container-sm mt-md-5 mt-sm-2  ">
           <form className="row g-3  mt-md-5 mt-sm-2 ">
                <div className="d-flex justify-content-end mb-md-5 mb-sm-0 "><button type="button" className="btn-close px-sm-2" aria-label="Close" onClick={handleClose}></button></div> 

                <div className="col-md-6">
                   <label htmlFor="full-name" className="form-label fs-2">Full name</label>
                   <input onChange={handleTypo}  name="fullName" type="text" id="full-name" className="form-control fs-2 mb-md-5 mb-sm-2" placeholder="Jovan Jovanovic"/>
                </div>
          
                <div className="col-md-6">
                  <label htmlFor="emailId" className="form-label fs-2">Email</label>
                  <input onChange={handleTypo}  name="email" type="email" id="emailId" className="form-control fs-2 mb-md-5 mb-sm-2 input-border-color" placeholder="jovan4@gmail.com"/>
                </div>

                <div className="col-md-5">
                  <label htmlFor="phoneNumberId" className="form-label fs-2">Phone number</label>
                  <input onChange={handleTypo}  name="phoneNumber" type="text" id="phoneNumberId" className="form-control fs-2 mb-md-5 mb-sm-2" placeholder="+381647961696"/>
                </div>

                <div className="col-md-4">
                  <label htmlFor="birthDayId" className="form-label fs-2">Date of birth</label>
                  <input onChange={handleTypo}  name="birthDay" type="date" id="birthDayId" className="form-control fs-2 mb-md-5 mb-sm-2" placeholder="23/1/1996"/>
                </div>

                <div className="col-md-3">
                  <label htmlFor="salaryId" className="form-label fs-2">Salary</label>
                  <input onChange={handleTypo}  name="salary" type="text" id="salaryId" className="form-control fs-2 mb-md-5 mb-sm-2" placeholder="800e"/>
                </div>

                {isActive && (<div className="col-12 mx-auto"><button onClick={handleSubmit} type="submit " className="btn btn-success fs-2 " >Submit</button></div>)}
 
             </form>
        </div>
    );
}

export default Create;