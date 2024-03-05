import { useNavigate } from "react-router-dom";
import "./createTask.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { actions as tasksActions } from "../../global/slices/tasksSlice";

const CreateTask = () => {
  const { employeesArr } = useSelector((state) => state.employees);
  const { tasksArr } = useSelector((state) => state.tasks);
  const { epicArr } = useSelector((state) => state.epic);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const isActive = true;
  let id = 0;

  tasksArr.forEach((t) => {
    if (t.id > id) id = t.id;
  });

  const [state, setState] = useState({
    id: ++id,
    title: "",
    description: "",
    assignee: "",
    taskStatus: "",
    dueDate: "",
  });

  const handleTypo = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(tasksActions.addTask(state));
    nav("/tasks");
  };

  return (
    <form className="form-create-task">
      <button
        onClick={() => {
          nav("/tasks");
        }}
        className="btn-close-task"
      >
        <ion-icon className="icon-close-task" name="close-outline"></ion-icon>
      </button>

      <div className="input-tas">
        <label htmlFor="title">Title</label>
        <input
          onChange={handleTypo}
          className="title"
          type="text"
          placeholder="Fix gaps"
          required
          name="title"
        />
      </div>
      <div className="input-tas">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleTypo}
          className="description"
          rows="6"
          // maxlength="3000"
          placeholder=""
          required
          name="description"
        ></textarea>
      </div>

      {/* <input
            className="full-name-task"
            type="text"
            placeholder="Maja Djordjevic"
            required
          /> */}
      <div className="input-tas">
        <label htmlFor="full-name-task">Assignee</label>
        <select
          onChange={handleTypo}
          id="select-assignee"
          className="full-name-task"
          required
          name="assignee"
        >
          <option value="">Choose asignee</option>
          {employeesArr.map((e) => (
            <option value={e.employee.fullName}>{e.employee.fullName}</option>
          ))}
        </select>
      </div>
      <div className="input-tas">
        <label htmlFor="status-task">Task status</label>
        <select
          onChange={handleTypo}
          id="select-status"
          className="select-status"
          name="taskStatus"
          required
        >
          <option value="">Choose status</option>
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>

          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="input-tas">
        <label htmlFor="task-epic">Epic</label>
        <select
          onChange={handleTypo}
          id="select-epic"
          className="task-epic"
          name="epic"
          required
        >
          <option value="">Unassigned</option>

          {epicArr.map((e) => (
            <option value={e.title}>{e.title}</option>
          ))}
        </select>
      </div>

      <div className="input-tas">
        <label htmlFor="due">Due date</label>
        <input
          onChange={handleTypo}
          className="due"
          type="date"
          placeholder="23/1/2024"
          name="dueDate"
          required
        />
      </div>

      <button onClick={handleSubmit} type="submit " className="submit-task">
        Submit
      </button>
      {!isActive && (
        <button type="edit" className="btn-edit-task">
          Edit
        </button>
      )}
    </form>
  );
};

export default CreateTask;
