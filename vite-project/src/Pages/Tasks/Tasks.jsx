import TaskList from "./TaskList";
import "./tasks.css";
import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <section className="section-task">
      <div className="heading-task">
        <h2 className="tas-heading">Tasks</h2>
        <Link to={"./create"} className="btn btn-success">
          Create
        </Link>
      </div>
      <ul className="lists-task">
        <li className="header-task">
          <p className="task-id">ID</p>
          <p className="task-title">Title</p>
          {/* <p className="task-desc">Description</p> */}
          <p className="task-fullname">Assignee</p>
          <p className="task-status">Status</p>
          <p className="task-due">Due date</p>
        </li>
      </ul>
      <TaskList />
    </section>
  );
};

export default Tasks;
