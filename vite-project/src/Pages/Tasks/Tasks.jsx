import TaskList from "./TaskList";
import "./tasks.css";
import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <section className="section-task">
      <div className="heading-task">
        <h2 className="tas-heading fs-1">Tasks</h2>
        <Link to={"./create"} className="btn btn-success btn-sm fs-4">
          Create
        </Link>
      </div>
      <ul className="lists-task">
        <li className="header-task ">
          <p className="task-id fs-4">ID</p>
          <p className="task-title fs-4">Title</p>
          {/* <p className="task-desc">Description</p> */}
          <p className="task-fullname fs-4">Assignee</p>
          <p className="task-status fs-4">Status</p>
          <p className="task-due fs-4">Due date</p>
          <p className="task-due fs-4"></p>
        </li>
      </ul>
      <TaskList />
    </section>
  );
};

export default Tasks;
