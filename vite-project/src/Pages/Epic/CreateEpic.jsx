import { useNavigate } from "react-router-dom";
import "./createEpic.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as epicActions } from "../../global/slices/epicSlice";

const CreateEpic = () => {
  const isActive = true;
  const nav = useNavigate();
  const { epicArr } = useSelector((state) => state.epic);
  const { tasksArr } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  let id = 0;
  epicArr.forEach((e) => {
    if (e.id > id) id = e.id;
  });

  const [state, setState] = useState({
    id: ++id,
    title: "",
    status: "",
    description: "",
    tasksList: "",
  });

  const handleTypo = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(epicActions.addEpic(state));
    nav("/epic");
  };

  return (
    <form className="form-create-epic">
      <button
        onClick={() => {
          nav("/epic");
        }}
        className="btn-close-epic"
      >
        <ion-icon className="icon-close-epic" name="close-outline"></ion-icon>
      </button>
      <div className="input-epi">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleTypo}
          className="title-epic"
          type="text"
          name="title"
          placeholder="Fix gaps"
          required
        />
      </div>

      <div className="input-epi">
        <label htmlFor="status-epi">Task status</label>
        <select
          onChange={handleTypo}
          id="select-status"
          className="select-status-epic"
          name="status"
          required
        >
          <option value="">Choose status</option>
          <option value="To do" className="epic-todo">
            To do
          </option>
          <option value="In progress" className="epic-inprogress">
            In progress
          </option>

          <option value="Completed" className="epic-completed">
            Completed
          </option>
        </select>
      </div>

      <div className="input-epi">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleTypo}
          className="description-epic"
          rows="6"
          // maxlength="3000"
          name="description"
          placeholder=""
          required
        ></textarea>
      </div>

      {/* <div className="input-epi tasks-epic-box"></div> */}
      <button onClick={handleSubmit} type="submit " className="submit-epic">
        Submit
      </button>
      {!isActive && (
        <button type="edit" className="btn-edit-epic">
          Edit
        </button>
      )}
    </form>
  );
};

export default CreateEpic;
