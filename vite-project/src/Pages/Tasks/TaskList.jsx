import { useDispatch, useSelector } from "react-redux";
import { actions as tasksActions } from "../../global/slices/tasksSlice";

const TaskList = () => {
  const { tasksArr } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="lists-added-tasks flex-column">
      {tasksArr.map((t, i) => (
        <li key={i++} className="task-info">
          <p className="li-id-task fs-4">{t.id}</p>
          <p className="li-title fs-4">{t.title}</p>
          <p className="li-assignee fs-4">{t.assignee}</p>
          <p className="li-status fs-4">{t.taskStatus}</p>

          <p className="li-due fs-4">{t.dueDate}</p>

          {/* <button className="btn-delete-task fs-4">Edit</button> */}
          <button
            onClick={() => {
              dispatch(tasksActions.deleteTask(t.id));
            }}
            className="btn-delete-task fs-4"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
