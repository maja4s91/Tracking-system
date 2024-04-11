import EpicList from "./EpicList";
import "./epic.css";
import { Link } from "react-router-dom";

const Epic = () => {
  return (
    <section className="section-epic">
      <div className="heading-epic">
        <h2 className="epi-heading fs-1">Epics</h2>
        <Link to={"./create"} className="btn btn-success btn-sm fs-4">
          Create
        </Link>
      </div>
      <ul className="lists-epic">
        <li className="header-epic ">
          <p className="epic-id fs-4">ID</p>
          <p className="epic-title fs-4">Title</p>

          <p className="epic-status fs-4">Status</p>
          
          {/* <p className="task-due">Due date</p>  */}
        </li>
      </ul>
      <EpicList />
    </section>
  );
};

export default Epic;
