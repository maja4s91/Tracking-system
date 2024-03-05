import { useState } from "react";
import "./reports.css";
import { useSelector } from "react-redux";

const Reports = () => {
  const { employeesArr } = useSelector((state) => state.employees);
  const { tasksArr } = useSelector((state) => state.tasks);
  const { epicArr } = useSelector((state) => state.epic);

  //Empoloyees report
  let totalEmploy = employeesArr.filter((e) => e.employee.fullName).length;

  // 5 employees completed the most tasks

  let emp = tasksArr.filter((t) => t.taskStatus !== "Complited");
  console.log(emp);

  // let name = emp.filter((t) => t.assignee);
  // console.log(name);

  // Tasks report
  let total = tasksArr.filter((t) => t.taskStatus).length;
  let toDo = tasksArr.filter((t) => t.taskStatus === "To do").length;
  let InProgress = tasksArr.filter(
    (t) => t.taskStatus === "In progress"
  ).length;
  let completed = tasksArr.filter((t) => t.taskStatus === "Completed").length;

  // Epic report
  let totalEpic = epicArr.filter((e) => e.status).length;
  let toDoEpic = epicArr.filter((e) => e.status === "To do").length;
  let InProgressEpic = epicArr.filter((e) => e.status === "In progress").length;
  let completedEpic = epicArr.filter((e) => e.status === "Completed").length;

  return (
    <section className="section-report ">
      <h2 className="rep-heading">Reports</h2>
      <div className="report-container">
        <div className="report-employee">
          <h3 className="report-employee-heading">Employees report</h3>
          <p className="report-employee-title">
            Total employees:
            <span className="report-employee-sum">{totalEmploy}</span>
          </p>
          <ul className="report-employees-lists">
            <li className="report-employee-list">
              <p className="report-employee-title title__five">
                5 employees completed the most tasks:
              </p>
              <div className="five-employee-box-title">
                <p className="report-employee-names">Full name</p>
                <p className="report-employee-tasks">Total completed tasks</p>
              </div>
              <div className="five-employee-box">
                {/* <p class="report-employee-names">{empl.name}</p>
                <p class="report-employee-tasks">{sortedArray[i][1]}</p> */}
              </div>
            </li>
          </ul>
        </div>
        {/* Tasks */}

        <div className="report-task">
          <h3 className="report-task-heading">Tasks report</h3>
          <p className="report-task-title">
            Total completed:
            <span className="report-task-sum report__task-completed">
              {completed}
            </span>
          </p>
          <p className="report-task-title">
            Total in progress:
            <span className="report-task-sum report__task-inprogress">
              {InProgress}
            </span>
          </p>
          <p className="report-task-title">
            Total to do:
            <span className="report-task-sum report__task-todo">{toDo}</span>
          </p>

          <p className="report-task-title">
            Total tasks:
            <span className="report-task-sum report__task-total">{total}</span>
          </p>
        </div>

        <div className="report-epic">
          <h3 className="report-epic-heading">Epics report</h3>
          <p className="report-epic-title">
            Total completed:
            <span className="report-epic-sum report__epic-completed">
              {completedEpic}
            </span>
          </p>
          <p className="report-epic-title">
            Total in progress:
            <span className="report-epic-sum report__epic-inprogress">
              {InProgressEpic}
            </span>
          </p>
          <p className="report-epic-title">
            Total to do:
            <span className="report-epic-sum report__epic-todo">
              {toDoEpic}
            </span>
          </p>
          <p className="report-epic-title">
            Total epic completed:
            <span className="report-epic-sum report__epic-total">
              {totalEpic}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reports;
