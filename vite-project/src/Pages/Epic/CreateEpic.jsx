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
    <div className="container-sm mt-md-5 mt-sm-2  ">
      <form className="row g-3  mt-md-5 mt-sm-2 ">
        <div className="d-flex justify-content-end mb-md-5 mb-sm-0 ">
          <button
            type="button"
            className="btn-close px-sm-2"
            aria-label="Close"
            onClick={() => nav("/epic")}
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

        <div className="col-md-12 mb-5 mb-sm-5">
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

export default CreateEpic;
