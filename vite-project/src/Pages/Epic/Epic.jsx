import EpicList from "./EpicList";
import "./epic.css";
import { Link } from "react-router-dom";

const Epic = () => {
  return (
    <section className="section-epic">
      <div className="heading-epic">
        <h2 className="epi-heading">Epics</h2>
        <Link to={"./create"} className="btn btn-success">
          Create
        </Link>
      </div>
      <ul className="lists-epic">
        <li className="header-epic ">
          <p className="epic-id">ID</p>
          <p className="epic-title">Title</p>

          <p className="epic-status">Status</p>
          <p className="epic-status">Tasks list</p>
          {/* <p className="task-due">Due date</p>  */}
        </li>
      </ul>
      <EpicList />
    </section>
  );
};

export default Epic;
