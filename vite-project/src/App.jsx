import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Employees from "./Pages/Employees/Employees";
import Tasks from "./Pages/Tasks/Tasks";
import Epic from "./Pages/Epic/Epic";
import Reports from "./Pages/Reports/Reports";
import Home from "./Pages/Home/Home";
import Create from "./Pages/Employees/Create";
// import CreateEmployee from "./Pages/Employees/CreateEmployee";
import EditEmployee from "./Pages/Employees/EditEmployee";
import { actions as employeesActions } from "./global/slices/employeesSlice";
import CreateTask from "./Pages/Tasks/CreateTask";
import CreateEpic from "./Pages/Epic/CreateEpic";

// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import EmployeesList from "./Pages/Employees/EmployeesList";

function App() {
  // const dispatch = useDispatch();
  // const { employeesArr } = useSelector((state) => state.employees);
  // useEffect(() => {}, [employeesArr, dispatch]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        {/* <Route path="/employees/form" element={<CreateEmployee />} /> */}
        <Route path="/employees/form" element={<Create />} />
        <Route path="/employees/edit" element={<EditEmployee />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/epic" element={<Epic />} />
        <Route path="/epic/create" element={<CreateEpic />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;
