import "./epic.css";
import { useSelector, useDispatch } from "react-redux";
import { actions as epicActions } from "../../global/slices/epicSlice";

const EpicList = () => {
  const { epicArr } = useSelector((state) => state.epic);
  const { tasksArr } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="lists-added-epics flex-column">
      {epicArr.map((e, i) => (
        <li key={i} className="epic-info flex">
          <p className="li-id-epic fs-4">{e.id}</p>
          <p className="li-title-epic fs-4">{e.title}</p>

          <p className="li-status-epic fs-4">{e.status}</p>

          {/* <button className="btn-delete-epic">Edit</button> */}
          <button
            onClick={() => dispatch(epicActions.deleteEpic(e.id))}
            className="btn-delete-epic fs-4"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EpicList;
