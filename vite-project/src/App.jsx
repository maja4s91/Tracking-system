import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Employees from "./Pages/Employees/Employees";
import Tasks from "./Pages/Tasks/Tasks";
import Epic from "./Pages/Epic/Epic";
import Reports from "./Pages/Reports/Reports";
import Home from "./Pages/Home/Home";
import CreateEmployee from "./Pages/Employees/CreateEmployee";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/epic" element={<Epic />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/employees/form" element={<CreateEmployee />} />
      </Routes>
    </>
  );
}

export default App;
