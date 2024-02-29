import { useDispatch, useSelector } from "react-redux";
import { actions as tasksActions } from "../../global/slices/tasksSlice";

const TaskList = () => {
  const { tasksArr } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="lists-added-tasks flex-column">
      {tasksArr.map((t, i) => (
        <li key={i} className="task-info flex">
          <p className="li-id-task">{t.id}</p>
          <p className="li-title">{t.title}</p>
          <p className="li-assignee">{t.assignee}</p>
          <p className="li-status">{t.taskStatus}</p>

          <p className="li-due">{t.dueDate}</p>

          <button className="btn-delete-task">Edit</button>
          <button
            onClick={() => {
              dispatch(tasksActions.deleteTask(t.id));
            }}
            className="btn-delete-task"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
