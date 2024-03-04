import "./epic.css";
import { useSelector, useDispatch } from "react-redux";
import { actions as epicActions } from "../../global/slices/epicSlice";

const EpicList = () => {
  const { epicArr } = useSelector((state) => state.epic);
  const dispatch = useDispatch();

  return (
    <ul className="lists-added-epics flex-column">
      {epicArr.map((e, i) => (
        <li key={i} className="epic-info flex">
          <p className="li-id-epic">{e.id}</p>
          <p className="li-title-epic">{e.title}</p>

          <p className="li-status-epic">{e.status}</p>
          <button className="btn-delete-epic">Edit</button>
          <button
            onClick={() => dispatch(epicActions.deleteEpic(e.id))}
            className="btn-delete-epic"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EpicList;
