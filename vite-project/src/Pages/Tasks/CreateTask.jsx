import { useNavigate } from "react-router-dom";
import "./createTask.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { actions as tasksActions } from "../../global/slices/tasksSlice";

const CreateTask = () => {
  const { employeesArr } = useSelector((state) => state.employees);
  const { tasksArr } = useSelector((state) => state.tasks);
  const { epicArr } = useSelector((state) => state.epic);
  const taskFormDataSelect = [
    {
      divColTask: "col-md-12",
      labelIdTask: "titleId",
      labelNameTask: "Title",
      nameTask: "title",
      typeTask: "text",
      idTask: "titleId",
      placeholderTask: "Fix gaps",
    },
  ];

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
    <div className="container-sm mt-md-5 mt-sm-2  ">
      <form className="row g-3  mt-md-5 mt-sm-2 ">
        <div className="d-flex justify-content-end mb-md-5 mb-sm-0 ">
          <button
            type="button"
            className="btn-close px-sm-2"
            aria-label="Close"
            onClick={() => nav("/tasks")}
          ></button>
        </div>

        <div className="col-md-6">
          <label htmlFor="title" className="form-label fs-2">
            Title
          </label>
          <input
            onChange={handleTypo}
            name="title"
            type="text"
            id="title"
            className="form-control fs-2 mb-md-5 mb-sm-2"
            placeholder="Fix gaps"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="textareaId" className="form-label fs-2">
            Description
          </label>
          <textarea
            onChange={handleTypo}
            name="description"
            className="form-control form-control-lg"
            id="textareaId"
            rows="5"
            placeholder=""
          ></textarea>
        </div>

        <div className="col-md-6">
          <label htmlFor="assigneeId" className="form-label fs-2">
            Assignee
          </label>
          <select
            onChange={handleTypo}
            name="assignee"
            className="form-select form-select-lg fs-2"
            aria-label="Default select example"
            id="assigneeId"
            required
          >
            <option>Choose asignee</option>
            {employeesArr.map((e, i) => (
              <option key={i} value={e.employee.fullName}>
                {e.employee.fullName}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="select-statusId" className="form-label fs-2">
            Task status{" "}
          </label>
          <select
            onChange={handleTypo}
            name="taskStatus"
            className="form-select form-select-lg fs-2"
            aria-label="Default select example"
            id="select-statusId"
            required
          >
            <option>Choose status</option>
            <option value="To do">To do</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="epicId" className="form-label fs-2">
            Epic
          </label>
          <select
            onChange={handleTypo}
            name="epic"
            className="form-select form-select-lg fs-2"
            aria-label="Default select example"
            id="epicId"
            required
          >
            <option>Unassigned</option>
            {epicArr.map((e, i) => (
              <option key={i} value={e.title}>
                {e.title}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="dueId" className="form-label fs-2">
            Due date
          </label>
          <input
            onChange={handleTypo}
            name="dueDate"
            type="date"
            id="dueId"
            className="form-control fs-2 mb-md-5 mb-sm-2"
            placeholder="23/1/2024"
          />
        </div>

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

export default CreateTask;
